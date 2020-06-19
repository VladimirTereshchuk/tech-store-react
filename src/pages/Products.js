import React from "react";
import { ProductContext } from "../context/products";
import Loading from "../components/Loading";
import ProductList from "../components/Products/ProductList";
import Filters from "../components/Products/Filters";
import PageProducts from "../components/Products/PageProducts";

export default function Products() {
  const { sorted } = React.useContext(ProductContext);
  // console.log(products);

  return (
    <div>
      {sorted.length === 0 ? (
        <Loading />
      ) : (
        <>
          <Filters />
          <PageProducts />
        </>
      )}
    </div>
  );
}
