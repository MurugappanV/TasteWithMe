import gql from 'graphql-tag';

export const hotel = gql`
    query Hotel {
        Hotel(id: "cjde7ni3645px0134n7bkomcw") {
            id
            isDeleted
            createdAt
            updatedAt
            name
        }
    }
`;

