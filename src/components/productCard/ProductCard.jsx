import { StyledProductCard } from "./ProductCard.styled";

export const ProductCard = ({ product }) => {
  return (
    <StyledProductCard>
      {/* <img src={product.image} alt="" />
      <h3>{product.name}</h3>
      <p>{product.price}</p> */}

      <img
        src="https://zpacks.com/cdn/shop/files/Zpacks-TrailCoolMerinoWoolT-Shirt-01_2048x.jpg?v=1686743695"
        alt=""
      />
      <div className="text">
        <h3>Shirt</h3>
        <p>$39.99 AUD</p>
      </div>
    </StyledProductCard>
  );
};
