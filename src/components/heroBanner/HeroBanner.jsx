import React from "react";
import { StyledHeroBanner } from "./HeroBanner.styled";
import { Button } from "../button/Button";
import { Link } from "react-router";

export const HeroBanner = () => {
  return (
    <div>
      <StyledHeroBanner>
        <img
          src="https://demostore.mock.shop/cdn/shop/files/DALL_E_2023-02-03_11.19.22_-_basketball_gym_5_1.png?v=1675445658&width=1500"
          alt="Hero Banner"
        />
        <div className="text">
          <h2>The Peak Collection</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            varius faucibus consequat. Nunc eleifend eget purus in viverra.
            Mauris congue ullamcorper nisi ac luctus. Vivamus eget posuere
            justo. Duis leo lorem, ultrices eu placerat sit amet, ultricies ut
            enim. Sed nec fringilla neque, non ornare odio. Integer urna eros,
            fermentum ac nibh ut, pretium tincidunt ligula.
          </p>
          <Button
            className="link"
            href={"/collections"}
            icon="Shop Now"
            as={Link}
          ></Button>
        </div>
      </StyledHeroBanner>
    </div>
  );
};
