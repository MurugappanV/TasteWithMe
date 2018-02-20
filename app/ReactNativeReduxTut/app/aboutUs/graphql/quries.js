import gql from 'graphql-tag';

export const hotelDetailByID = gql`
    query Hotel($Id : ID!){
        Hotel(id: $Id){
            id
            name,
            logoImageUrl,
            hotelImages {
                hotelImageUrls
            },
            hotelDetail {
                description,
                openingTime,
                closingTime,
                storePhoneNumber
            }
        }
    }
`