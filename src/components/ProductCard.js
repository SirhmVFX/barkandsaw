import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <>
      <Link to="/product/:id" className="product">
        <div className="dicount-tag">Up to 30% off</div>
        <img src="/images/Rectangle 92-3.png" alt="productimage" />
        <div>
          <p>Kurv chair</p>
          <h3>N40,000</h3>
        </div>

        <div className="products-actions">
          <ReactStars
            count={5}
            size={28}
            value="3"
            edit={false}
            activeColor="#E16F25"
          />

          <div className="action-bar">
            <Link>
              <img className="icons" src="/images/ion_cartprd.png" alt="" />
            </Link>

            <Link>
              <img
                className="icons"
                src="/images/material-symbols_favoriteprd.png"
                alt=""
              />
            </Link>

            <Link>
              <img
                className="icons"
                src="/images/ic_sharp-compare-arrowsprd.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
