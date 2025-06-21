import { gql } from "graphql-request";

export const ButtonQuery = gql`
  {
    button(id: "2Ch7GKDdEkeosjNPLLl9hb") {
      buttonText
      fontSize
    }
  }
`;
