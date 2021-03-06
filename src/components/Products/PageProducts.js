import React from "react";
import { ProductContext } from "../../context/products";
import ProductList from "./ProductList";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const PageProducts = () => {
  const { sorted, page, changePage } = React.useContext(ProductContext);
  if (sorted[page]) {
    return (
      <>
        <ProductList products={sorted[page]} />;
        {sorted.length > 1 && (
          <article className="pagination-buttons">
            {/* prev button */}
            {page > 0 && (
              <button
                onClick={() => changePage(page - 1)}
                className="prev-page-btn"
              >
                <FaAngleDoubleLeft />
              </button>
            )}
            {sorted.map((_, index) => {
              return (
                <button
                  onClick={() => changePage(index)}
                  key={index}
                  className={`page-btn ${page === index && `page-btn-current`}`}
                >
                  {index + 1}
                </button>
              );
            })}
            {/* next button */}
            {page < sorted.length - 1 && (
              <button
                onClick={() => changePage(page + 1)}
                className="next-page-btn"
              >
                <FaAngleDoubleRight></FaAngleDoubleRight>
              </button>
            )}
          </article>
        )}
      </>
    );
  } else {
    return (
      <h3 className="search-errors">
        unfortunately your search query did not return any products
      </h3>
    );
  }
};

export default PageProducts;
