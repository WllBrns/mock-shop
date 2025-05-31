import { useParams } from "react-router";
import { ProductGrid } from "../../../components/productGrid/ProductGrid";

export const ProductPage = () => {
  let { collectionName } = useParams();

  if (collectionName === undefined) {
    collectionName = "Collections";
  }

  return (
    <div className="container">
      <h1>{collectionName}</h1>
      <ProductGrid products={[null]} />
    </div>
  );
};
