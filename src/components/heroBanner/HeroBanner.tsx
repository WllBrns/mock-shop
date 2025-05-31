import {
  LeftStyledHeroBanner,
  CenterStyledHeroBanner,
} from "./HeroBanner.styled";
import { Button } from "../button/Button";
import { Link } from "react-router";

interface HeroBannerProps {
  variant: "left" | "center";
  img: string;
  alt?: string;
  h2: string;
  p: string;
  desc?: string;
}

export const HeroBannerVariants = {
  left: LeftStyledHeroBanner,
  center: CenterStyledHeroBanner,
};

export const HeroBanner = ({ variant, img, alt, h2, p }: HeroBannerProps) => {
  const Tag = HeroBannerVariants[variant];
  return (
    <div className="container">
      <Tag>
        <img src={img} alt={alt} />
        <div className="text">
          <h2>{h2}</h2>
          <p>{p}</p>

          <Button
            className="link"
            href={"/collections"}
            icon="Shop Now"
            as={Link}
          ></Button>
        </div>
      </Tag>
    </div>
  );
};
