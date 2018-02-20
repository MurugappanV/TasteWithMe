import { fromEvent, FunctionEvent } from 'graphcool-lib'
import { GraphQLClient } from 'graphql-request'
// import * as fetch from 'isomorphic-fetch'
import * as admin from 'firebase-admin';

var serviceAccount = require('./tastewithme-adminsdk-sx4uj-5a6cc688a8.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://tastewithme-1.firebaseio.com/'
});

interface User {
  id: string
}

// interface GoogleUser {
//   id: string
//   email: string | null
// }

interface EventData {
  firebaseToken: string
}

export default async (event: FunctionEvent<EventData>) => {
  console.log(event)

  try {
    const graphcool = fromEvent(event)
    const api = graphcool.api('simple/v1')

    const { firebaseToken } = event.data

    // call firebase API to obtain user data
    const firebaseUser = await getFirebaseUser(firebaseToken)
    
    // get graphcool user by firebase id
    const user: User = await getGraphcoolUser(api, firebaseUser)
      .then(r => r.User)

    // check if graphcool user exists, and create new one if not
    let userId: string | null = null

    if (!user) {
      userId = await createGraphcoolUser(api, firebaseUser)
    } else {
      userId = user.id
    }

    // generate node token for User node
    const token = await graphcool.generateAuthToken(userId!, 'User')

    return { data: { id: userId, token} }
  } catch (e) {
    console.log(e)
    return { error: `An unexpected error occured during authentication. ${e}` }
  }
}

// async function getGoogleUser(firebaseToken: string): Promise<GoogleUser> {
//   const endpoint = `https://www.firebaseapis.com/oauth2/v3/tokeninfo?id_token=${firebaseToken}`
//   const data = await fetch(endpoint)
//     .then(response => response.json())

//   if (data.error_description) {
//     throw new Error(data.error_description)
//   }

//   return data
// }

async function getFirebaseUser(firebaseToken: string): Promise<string> {
  const uid = await admin.auth().verifyIdToken(firebaseToken)
  .then((decodedToken) => {
    return decodedToken.uid;
  }).catch((error) => {
    throw new Error(error)
  });

  return uid;
}



async function getGraphcoolUser(api: GraphQLClient, firebaseUserId: string): Promise<{ User }> {
  const query = `
    query getUser($firebaseUserId: String!) {
      User(firebaseUserId: $firebaseUserId) {
        id
      }
    }
  `

  const variables = {
    firebaseUserId,
  }

  return api.request<{ User }>(query, variables)
}

async function createGraphcoolUser(api: GraphQLClient, firebaseUserId: string): Promise<string> {
  const mutation = `
    mutation createUser($firebaseUserId: String!) {
      createUser(
        firebaseUserId: $firebaseUserId
      ) {
        id
      }
    }
  `

  const variables = {
    firebaseUserId,
  }

  return api.request<{ createUser: User }>(mutation, variables)
    .then(r => r.createUser.id)
}
