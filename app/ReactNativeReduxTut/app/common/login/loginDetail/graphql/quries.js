import gql from 'graphql-tag';

export const userByIdQuery = gql`
    query UserById($id : ID!) {
        User(id: $id) {
            id
            name
            email
            phoneNo
            address
            addressLat
            addressLong
        }
    }
`