import gql from 'graphql-tag';
import { hotelDetailById } from '../actions/aboutUsActions';

export const hotelDetailByID = (hotelId) => {
    console.log(hotelId)
    return gql`
    query {
        Hotel(id: "${hotelId}"){
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
`};