export interface HeroBannerType {
  __typename: string;
  button: {
    buttonText: string;
    fontSize: string;
  };
  heading: string;
  body: string;
  backgroundImage: {
    description: string;
    url: string;
  };
  displayType: "left" | "center";
}
