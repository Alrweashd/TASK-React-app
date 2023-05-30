import products from "../products";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return products.map((product) => (
    <ProductItem food={product} key={product.id} />
  ));
};

export default ProductList;
