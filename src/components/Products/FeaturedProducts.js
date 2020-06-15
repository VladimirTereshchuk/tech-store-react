import React from "react";

import Loading from "../Loading";
import ProductList from "./ProductList";
import { ProductContext } from "../../context/products";

export default function FeaturedProducts() {
  const { products } = React.useContext(ProductContext);

  const featuredProducts = products.filter((item) => item.featured === true);

  return (
    <div>
      {featuredProducts.length === 0 ? (
        <Loading />
      ) : (
        <ProductList title="featured products" products={featuredProducts} />
      )}
    </div>
  );
}
