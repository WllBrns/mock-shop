import {
  LeftStyledHeroBanner,
  CenterStyledHeroBanner,
} from "./HeroBanner.styled";
import { Button } from "../button/Button";
import { Link } from "react-router";

interface HeroBannerProps {
  displayType: "left" | "center";
  backgroundImage: {
    url: string;
    description: string;
  };
  alt?: string;
  heading: string;
  body: string;
  desc?: string;
}

export const HeroBannerVariants = {
  left: LeftStyledHeroBanner,
  center: CenterStyledHeroBanner,
};

export const HeroBanner = ({
  displayType,
  backgroundImage: { url, description },
  alt,
  heading,
  body,
}: HeroBannerProps) => {
  const Tag = HeroBannerVariants[displayType];
  return (
    <div className="container">
      <Tag>
        <img src={url} alt={alt} />
        <div className="text">
          <h2>{heading}</h2>
          <p>{body}</p>

          <Button className="link" href={"/collections"} as={Link}>
            Shop Now
          </Button>
        </div>
      </Tag>
    </div>
  );
};
