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

export const dishListByCourse = gql`
    query getDishList {
        allCourses {
            name 
            dishDetailRelations {
                dishes {
                    name
                    dishType
                    photoUrls
                    rateDetalil {
                        price
                    }
                }
            }
        }
    }
`;

export const hotelDetailByID = gql`
    query {
        Hotel(id: "cjde7ni3645px0134n7bkomcw"){
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
