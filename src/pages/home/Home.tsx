import {
  HeroBanner,
  HeroBannerVariants,
} from "../../components/heroBanner/HeroBanner";
import { ProductGrid } from "../../components/productGrid/ProductGrid";
import { StyledHome } from "./Home.styled";
import {
  ProductCard,
  ProductCardProps,
} from "../../components/productCard/ProductCard";
import { ProductQuery } from "../../queries/productQuery";

import { useState, useEffect } from "react";
import { request } from "graphql-request";

export const Home = () => {
  const [productDataArray, setProductData] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    const getProductData = async () => {
      const response = (await request(
        "https://mock.shop/api",
        ProductQuery
      )) as any;

      response.products.edges.map((product: any) => {
        setProductData((prev) => [...prev, product.node]);
      });
      console.log(response);
    };

    getProductData();
  }, []);

  return (
    <StyledHome style={{ overflow: "hidden" }}>
      <HeroBanner
        variant={"left"}
        img={
          "https://demostore.mock.shop/cdn/shop/files/DALL_E_2023-02-03_11.19.22_-_basketball_gym_5_1.png?v=1675445658&width=1500"
        }
        desc={"Hero Banner"}
        h2={"The Peak Collection"}
        p={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris varius faucibus consequat. Nunc eleifend eget purus in viverra. Mauris congue ullamcorper nisi ac luctus. Vivamus eget posuere justo. Duis leo lorem, ultrices eu placerat sit amet, ultricies ut enim. Sed nec fringilla neque, non ornare odio. Integer urna eros, fermentum ac nibh ut, pretium tincidunt ligula."
        }
      />

      <div className="new-arrivals container">
        <p>New Arrivals</p>
        <h2>Spring '23</h2>
        {/* <ProductCard {...productDataArray[0]} /> */}
        <ProductGrid products={productDataArray} />
      </div>
      <HeroBanner
        variant={"center"}
        img={
          "https://demostore.mock.shop/cdn/shop/files/second.jpg?v=1675442050&width=1500"
        }
        desc={"Hero Banner"}
        h2={"Midweight Classics"}
        p={"Clothes that work as hard as you do."}
      />
    </StyledHome>
  );
};

export default Home;
