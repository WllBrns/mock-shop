import React from "react";
import {
  LeftStyledHeroBanner,
  CenterStyledHeroBanner,
} from "./HeroBanner.styled";
import { Button } from "../button/Button";
import { Link } from "react-router";

export const HeroBannerVariant = {
  left: LeftStyledHeroBanner,
  center: CenterStyledHeroBanner,
};

export const HeroBanner = ({ variant, img, alt, h2, p }) => {
  const Tag = variant;
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
