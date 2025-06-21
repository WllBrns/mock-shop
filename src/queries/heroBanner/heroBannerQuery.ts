import { gql } from "graphql-request";

export const HeroBannerQuery = gql`
  {
    heroBanner(id: "1F6tC40uSFwUaXAn9pajkh") {
      button {
        buttonText
        fontSize
      }
      heading
      body
      backgroundImage {
        url
        description
      }
      displayType
    }
  }
`;
