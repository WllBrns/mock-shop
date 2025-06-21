import { StyledProductCard } from "./ProductCard.styled";

export interface ProductCardProps {
  id?: string;
  title?: string;
  featuredImage?: {
    url?: string;
  };
  variants?: {
    edges?: [
      {
        node?: {
          price?: {
            amount?: number;
            currencyCode?: string;
          };
        };
      }
    ];
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
      <h3>{title}</h3>
      <div className="text">
        <p>${variants?.edges?.[0]?.node?.price?.amount}</p>
        <p>{variants?.edges?.[0]?.node?.price?.currencyCode}</p>
      </div>
    </StyledProductCard>
  );
};
