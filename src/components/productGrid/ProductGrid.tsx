import { StyledProductGrid } from "./ProductGrid.styled";
import { ProductCard, ProductCardProps } from "../productCard/ProductCard";

interface ProductGridProps {
  products: Array<ProductCardProps | null>;
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  const productCards = products.map((product) => <ProductCard {...product} />);

  return <StyledProductGrid>{productCards}</StyledProductGrid>;
};
