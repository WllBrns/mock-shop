import { gql } from "graphql-request";

export const HomePageQuery = gql`
  {
    homePage(id: "55x83G9vmDfIgYXEldq5jV") {
      sectionsCollection {
        items {
          __typename
          ... on HeroBanner {
            button {
              buttonText
              fontSize
            }
            heading
            body
            backgroundImage {
              description
              url
            }
            displayType
          }
          ... on Section {
            heading
            subHeading
          }
        }
      }
    }
  }
`;
