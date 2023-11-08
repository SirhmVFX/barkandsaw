import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function SingleProduct() {
  return (
    <>
      <section className="product-column">
        <div className="product-pictures">
          <div className="product-oth">
            <img
              className="product-other-image"
              src="/images/Rectangle 929.png"
              alt="productimage"
            />
            <img
              className="product-other-image"
              src="/images/Rectangle 929.png"
              alt="productimage"
            />
            <img
              className="product-other-image"
              src="/images/Rectangle 929.png"
              alt="productimage"
            />
            <img
              className="product-other-image"
              src="/images/Rectangle 929.png"
              alt="productimage"
            />
          </div>

          <div className="product-main-image">
            <img src="/images/Rectangle 929.png" alt="productimage" />
          </div>
        </div>

        <div className="products-descriptions">
          <div>
            <h3 className="color1">Outdoor teak dinning set</h3>
            <div className="available">
              <ReactStars
                count={5}
                size={28}
                value="3"
                edit={false}
                activeColor="#E16F25"
              />
              | <p>In Stock </p>
            </div>
          </div>

          <div>
            <h3>N250,000</h3>
            <p>
              Outdoor teak dinning set Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
          </div>

          <div className="product-colors">
            <p>Colors</p>
            <div>
              <input type="radio" name="red" id="" />
              <label htmlFor="Blue">Blue</label>
            </div>
            <div>
              <input type="radio" name="red" id="" />
              <label htmlFor="Blue">Red</label>
            </div>
          </div>

          <div className="buy-actions">
            <div>
              <label htmlFor="quantity">Quantity</label>
              <select name="" id="qty">
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
              </select>
            </div>

            <button className="button1">Buy Now</button>

            <Link>
              <img
                className="icons"
                src="/images/material-symbols_favorite.png"
                alt=""
              />
            </Link>
          </div>

          <div>
            <div className="delivery-options">
              <img
                className="delivery-icons"
                src="/images/icon-deliverydelivery.png"
                alt="delivery"
              />
              <div>
                <h4>Free Delivery</h4>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>

            <div className="delivery-options">
              <img
                className="delivery-icons"
                src="/images/Icon-returndelivery.png"
                alt="delivery"
              />
              <div>
                <h4>Return Delivery</h4>
                <p>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <h2>Related Products</h2>
        <div className="all-products">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </>
  );
}

export default SingleProduct;
