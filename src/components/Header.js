import React from "react";
import { NavLink, Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import { useState } from "react";

function Header() {
  const [shoppingCart, setShoppingCart] = useState(false);
  return (
    <>
      <header className="header-top">
        <p>+2348110479876 | Stores</p>
        <input
          className="search"
          type="search"
          name="search"
          id=""
          placeholder="Search entire store"
        />
        <div className="top-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/ourstore">Our Store</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/signin">Sign In</NavLink>
        </div>
        <div className="top-icons">
          <Link>
            <img className="icons" src="/images/Vector.png" alt="topicons" />
          </Link>
          <Link to="wishlist">
            <img
              className="icons"
              src="/images/material-symbols_favorite.png"
              alt="topicons"
            />
          </Link>
          <Link to="wishlist">
            <img
              className="icons"
              src="/images/Vectorwhyimg-3.png"
              alt="topicons"
            />
          </Link>
          <Link onClick={() => setShoppingCart(true)}>
            <img className="icons" src="/images/ion_cart.png" alt="topicons" />
          </Link>
        </div>

        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </header>

      <header className="header-bottom">
        <img className="logo" src="/images/logo.png" alt="logo" />

        <div className="hamburger-2">
          <div className="line-2"></div>
          <div className="line-2"></div>
          <div className="line-2"></div>
        </div>

        <div className="filter">
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
      </header>
      <ShoppingCart trigger={shoppingCart} setTrigger={setShoppingCart}>
        <div className="shopping-heading">
          <h3>Shopping cart </h3>
          <p>3 Items</p>
        </div>

        <div className="shopping-products">
          <img
            className="shopping-img"
            src="/images/Rectangle 92-3.png"
            alt="shoppingimg"
          />

          <div className="shopping-product-details">
            <div>
              <h4>Eames uphosltered Dinning Set</h4>
              <p>Gucci</p>
              <div>
                <p>Color: Blue</p>
                <p>Quantity: 2</p>
              </div>
            </div>

            <div className="shopping-actions">
              <h4 className="color1">N600,000</h4>

              <button className="button2">remove</button>
            </div>
          </div>
        </div>

        <div className="shopping-products">
          <img
            className="shopping-img"
            src="/images/Rectangle 92-3.png"
            alt="shoppingimg"
          />

          <div className="shopping-product-details">
            <div>
              <h4>Eames uphosltered Dinning Set</h4>
              <p>Gucci</p>
              <div>
                <p>Color: Blue</p>
                <p>Quantity: 2</p>
              </div>
            </div>

            <div className="shopping-actions">
              <h4 className="color1">N600,000</h4>

              <button className="button2">remove</button>
            </div>
          </div>
        </div>

        <div className="shopping-products">
          <img
            className="shopping-img"
            src="/images/Rectangle 92-3.png"
            alt="shoppingimg"
          />

          <div className="shopping-product-details">
            <div>
              <h4>Eames uphosltered Dinning Set</h4>
              <p>Gucci</p>
              <div>
                <p>Color: Blue</p>
                <p>Quantity: 2</p>
              </div>
            </div>

            <div className="shopping-actions">
              <h4 className="color1">N600,000</h4>

              <button className="button2">remove</button>
            </div>
          </div>
        </div>

        <div className="shopping-buttons">
          <div className="shop1">
            <button onClick={() => setShoppingCart(false)} className="button2">
              Continue Shopping
            </button>
          </div>

          <div className="shopping-charges-card">
            <div className="shopping-charges">
              <div>
                <p>Total Products:</p>
                <p>Shipping fees:</p>
                <h4>Total:</h4>
              </div>

              <div>
                <p>N299,0929</p>
                <p>Free</p>
                <h4>N237,092</h4>
              </div>
            </div>
            <button onClick={() => setShoppingCart(false)} className="button1">
              <Link to="shoppingcartlist">Checkout</Link>
            </button>
          </div>
        </div>
      </ShoppingCart>
    </>
  );
}

export default Header;
