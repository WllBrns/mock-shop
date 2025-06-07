import { StyledProductGrid } from "./ProductGrid.styled";
import { ProductCard, ProductCardProps } from "../productCard/ProductCard";

interface ProductGridProps {
  edges: Edge[] | null;
}

export interface Edge {
  node: ProductCardProps | null;
}

export const ProductGrid = ({ edges }: ProductGridProps) => {
  const productCards = edges?.map((edge) => {
    return <ProductCard key={edge?.node?.id} {...edge.node} />;
  });

  return <StyledProductGrid>{productCards}</StyledProductGrid>;
};
