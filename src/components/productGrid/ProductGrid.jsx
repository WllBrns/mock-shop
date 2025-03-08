import { StyledProductGrid } from "./ProductGrid.styled";
import { ProductCard } from "../productCard/ProductCard";

export const ProductGrid = ({ products }) => {
  const productCards = products.map((product) => <ProductCard />);

  return <StyledProductGrid>{productCards}</StyledProductGrid>;
};
