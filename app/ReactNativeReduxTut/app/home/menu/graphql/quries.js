import gql from 'graphql-tag';

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

