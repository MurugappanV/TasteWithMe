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
