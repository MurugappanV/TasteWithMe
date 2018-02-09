// import { ApolloClient, createNetworkInterface } from 'react-apollo';
// import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

// const NETWORK_INTERFACE_URL = 'http://localhost:60000/simple/v1/cjc0b79eg00040125wnuzt3cp'
// const SUBSCRIPTION_CLIENT_URL = 'ws://localhost:60000/subscriptions/v1/cjc0b79eg00040125wnuzt3cp';

// const networkInterface = createNetworkInterface({ uri: NETWORK_INTERFACE_URL });
// const wsClient = new SubscriptionClient(SUBSCRIPTION_CLIENT_URL, {
// 	reconnect: true
// });

// const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
//   networkInterface,
//   wsClient
// );

// const client = new ApolloClient({
//   networkInterface: networkInterfaceWithSubscriptions,
// });


// export default client;

import ApolloClient, { createNetworkInterface } from 'react-apollo';
//import config from '../config.json';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cjd1tk3gh0hq60190xt4eg2cy',
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }

   // get the authentication token from local storage if it exists
    // const token = localStorage.getItem('token');
    // if (token) {
    //   req.options.headers.authorization = `Bearer ${token}`;
    // }
    next();
  },
}]);

export default new ApolloClient({ networkInterface });