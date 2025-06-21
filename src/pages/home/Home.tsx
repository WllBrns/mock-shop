import {
  HeroBanner,
  HeroBannerVariants,
} from "../../components/heroBanner/HeroBanner";
import { ProductGrid } from "../../components/productGrid/ProductGrid";
import { StyledHome } from "./Home.styled";
import { Edge } from "../../components/productGrid/ProductGrid";
import {
  ProductCard,
  ProductCardProps,
} from "../../components/productCard/ProductCard";
import { ButtonQuery } from "../../queries/button/buttonQuery";
import { ProductQuery } from "../../queries/productQuery";

import { useState, useEffect } from "react";
import { request } from "graphql-request";
import { Button } from "../../components/button/Button";
import { ButtonType } from "../../queries/button/button.type";
import { HomePageQuery } from "../../queries/homePage/homePageQuery";
import { HomePageType } from "../../queries/homePage/homePage.type";
import { HeroBannerType } from "../../queries/heroBanner/heroBanner.type";
import { Section } from "../../components/section/Section";
import { SectionType } from "../../queries/section/section.type";

export const Home = () => {
  const [productDataArray, setProductData] = useState<Edge[]>([]);

  const [buttonData, setButtonData] = useState<ButtonType>();

  const [homePageData, setHomePageData] = useState<HomePageType>();

  useEffect(() => {
    const getButtonData = async () => {
      const response = (await request(
        "https://graphql.contentful.com/content/v1/spaces/aseih2nps270/environments/master",
        ButtonQuery,
        undefined,
        {
          Authorization: "Bearer jbMmrBBy0G1ljlGpvhq0rRLRYiSQwRU2G55Kf4NZ2BY",
        }
      )) as any;
      // console.log(response.button);
      setButtonData(response.button);
    };

    const getHomePageData = async () => {
      const response = (await request(
        "https://graphql.contentful.com/content/v1/spaces/aseih2nps270/environments/master",
        HomePageQuery,
        undefined,
        {
          Authorization: "Bearer jbMmrBBy0G1ljlGpvhq0rRLRYiSQwRU2G55Kf4NZ2BY",
        }
      )) as any;
      console.log("homepage response");
      console.log(response);

      setHomePageData(response);
    };

    const getProductData = async () => {
      const response = (await request(
        "https://mock.shop/api",
        ProductQuery
      )) as any;

      setProductData(response.products?.edges);
    };

    getButtonData();
    getHomePageData();
    getProductData();
  }, []);

  /*   useEffect(() => {
    console.log(productDataArray);
  }, [productDataArray]); */

  return (
    <StyledHome style={{ overflow: "hidden" }}>
      {/* <Button fontSize={buttonData?.fontSize}>{buttonData?.buttonText}</Button> */}

      {homePageData?.homePage?.sectionsCollection.items?.map((section) => {
        console.log(section.__typename);
        if (section.__typename === "HeroBanner")
          return <HeroBanner {...(section as HeroBannerType)} />;
        if (section.__typename === "Section")
          return <Section {...(section as SectionType)} />;
        return <div></div>;
      })}
    </StyledHome>
  );
};

export default Home;
