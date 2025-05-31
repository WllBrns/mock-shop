import { gql } from "graphql-request";

export const ProductQuery = gql`
  {
    product(id: "gid://shopify/Product/7982905098262") {
      id
      title
      description
      featuredImage {
        id
        url
      }
      variants(first: 3) {
        edges {
          node {
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;
