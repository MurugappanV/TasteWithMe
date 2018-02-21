import gql from 'graphql-tag';

export const dishListByCourse = gql`
    query getDishList {
        allCourses {
            name 
            dishDetailRelations {
                dishes {
                    id
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

