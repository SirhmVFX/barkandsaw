import React from "react";
import ProductCard from "../components/ProductCard";

function Ourstore() {
  return (
    <>
      <section className="store-header">
        <div className="categories">
          <h2>Chairs</h2>

          <div className="categories-filter">
            <h3>Shopping Options</h3>'
            <div className="option-filter">
              <select name="chairs" id="">
                <option value="chairs">chairs</option>
                <option value="chairs">chairs</option>
                <option value="chairs">chairs</option>
                <option value="chairs">chairs</option>
              </select>
              <select name="chairs" id="">
                <option value="chairs">chairs</option>
                <option value="chairs">chairs</option>
                <option value="chairs">chairs</option>
                <option value="chairs">chairs</option>
              </select>
              <select name="chairs" id="">
                <option value="chairs">chairs</option>
                <option value="chairs">chairs</option>
                <option value="chairs">chairs</option>
                <option value="chairs">chairs</option>
              </select>
              <select name="chairs" id="">
                <option value="chairs">chairs</option>
                <option value="chairs">chairs</option>
                <option value="chairs">chairs</option>
                <option value="chairs">chairs</option>
              </select>
            </div>
            <div className="hamburger">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>

        <div className="all-products">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </>
  );
}

export default Ourstore;
