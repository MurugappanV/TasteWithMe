import gql from 'graphql-tag';

export const hotelDetailByID = gql`
    query {
        Hotel(id: "cjde7ni3645px0134n7bkomcw"){
            id
            name,
  	        logoImageUrl,
            hotelImages {
                hotelImageUrls
            },
            hotelDetail {
                description,
                openingTime,
                closingTime
            }
          }
      }
`;