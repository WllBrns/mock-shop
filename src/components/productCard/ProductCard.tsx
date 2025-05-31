import { StyledProductCard } from "./ProductCard.styled";

export interface ProductCardProps {
  title?: string;
  featuredImage?: {
    url?: string;
  };
  description?: string;
}

export const ProductCard = ({
  title,
  featuredImage,
  description,
}: ProductCardProps) => {
  return (
    <StyledProductCard>
      <img src={featuredImage?.url} alt="" />
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </StyledProductCard>
  );
};
