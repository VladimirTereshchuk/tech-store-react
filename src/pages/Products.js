import React from "react";
import { ProductContext } from "../context/products";
import Loading from "../components/Loading";
import ProductList from "../components/Products/ProductList";

export default function Products() {
  const { loading, products } = React.useContext(ProductContext);
  // console.log(products);

  return (
    <div>
      {products.length === 0 ? (
        <Loading />
      ) : (
        <ProductList title="our products" products={products} />
      )}
    </div>
  );
}
