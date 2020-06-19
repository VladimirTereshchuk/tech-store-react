import React from "react";
import { ProductContext } from "../../context/products";

const Filters = () => {
  const {
    filters: { search, category, shipping, price, sort_by },
    updateFilters,
    sorted,
  } = React.useContext(ProductContext);
  return (
    <section className="filters-section">
      <h2 className="section-title">search products</h2>
      <form className="filters-form">
        <div>
          {/* search input */}
          <div className="form-group">
            <label htmlFor="search">search term</label>
            <input
              type="text"
              name="search"
              id="search"
              className="form-control"
              value={search}
              onChange={updateFilters}
            />
          </div>
          {/* end of search form */}
          {/* select category */}
          <div className="form-group">
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="category"
              className="form-control"
              value={category}
              onChange={updateFilters}
            >
              <option value="all">all</option>
              <option value="phone">phone</option>
              <option value="computer">computer</option>
              <option value="radio">radio</option>
            </select>
          </div>
          {/* end of category */}
          {/* free shipping */}
          <div className="form-group">
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={updateFilters}
            />
            <label htmlFor="shipping">free shipping</label>
          </div>
          {/* end of free shipping */}
        </div>
        {/* price */}
        <div className="price-group">
          <p>price</p>
          <label>
            <input
              type="radio"
              name="price"
              id="all"
              value="all"
              checked={price === "all"}
              onChange={updateFilters}
            />
            all
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="0"
              checked={price === 0}
              onChange={updateFilters}
            />
            $0 - $300
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="300"
              checked={price === 300}
              onChange={updateFilters}
            />
            $300 - $650
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="650"
              checked={price === 650}
              onChange={updateFilters}
            />
            Over $650
          </label>
        </div>
        {/* end of price */}
        {/* <div style={{ display: "block", margin: "auto" }}> */}
        <div className="sort_by">
          <label htmlFor="sort_by">sort by</label>
          <select
            name="sort_by"
            id="sort_by"
            className="form-control"
            value={sort_by}
            onChange={updateFilters}
          >
            <option value="price high to low">price high to low</option>
            <option value="price low to high">price low to high</option>
          </select>
        </div>
        {/* </div> */}
      </form>
      <h6>total products :{sorted.flat().length} </h6>
      <hr />
    </section>
  );
};

export default Filters;
