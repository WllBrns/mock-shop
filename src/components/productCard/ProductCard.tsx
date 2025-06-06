import { StyledProductCard } from "./ProductCard.styled";

export interface ProductCardProps {
  id?: string;
  title?: string;
  featuredImage?: {
    url?: string;
  };
  variants?: {
    edges?: {
      node?: {
        price?: {
          amount?: number;
          currencyCode?: string;
        };
      };
    };
  };
}

export const ProductCard = ({
  id,
  title,
  featuredImage,
  variants,
}: ProductCardProps) => {
  return (
    <StyledProductCard key={id}>
      <img src={featuredImage?.url} alt="" />
      <div className="text">
        <h3>{title}</h3>
        <p>
          {variants?.edges?.node?.price?.amount}
          {/* {variants?.edges?.node?.price?.currencyCode} */}
        </p>
      </div>
    </StyledProductCard>
  );
};
