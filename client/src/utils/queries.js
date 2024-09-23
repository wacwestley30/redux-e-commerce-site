import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
    query getProducts {
        products {
            _id
            name
            price
            image
            description
        }
    }
`;

export const GET_PRODUCT = gql`
    query getProduct($productId: ID!) {
        product(productId: $productId) {
            _id
            image
            name
            description
            price
        }
    }
`;