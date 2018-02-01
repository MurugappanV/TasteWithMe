import gql from 'graphql-tag';

export const allUsers = gql`
    query AllUsers {
        allUsers {
            id
            name
            dateOfBirth
        }
    }
`;

export const hotel = gql`
    query Hotel {
        Hotel(id: "cjcx7z5va002y0125ue5cuier") {
            id
            isDeleted
            createdAt
            updatedAt
            name
        }
    }
`;