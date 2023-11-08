import React from "react";

function ShoppingCartList() {
  return (
    <>
      <div className="store-header">
        <h2>Shopping Cart List</h2>

        <div className="cart">
          <div className="cart-list">
            <p>Products</p>
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
          </div>
          <div className="cart-list">
            <p>Colors</p>
            <h4>Dark Blue</h4>
            <h4>Red</h4>
            <h4>Army Greem</h4>
          </div>
          <div className="cart-list">
            <p>Quantity</p>
            <h4>12</h4>
            <h4>230</h4>
            <h4>10</h4>
          </div>
          <div className="cart-list">
            <p>Price</p>
            <h4 className="color1">12,000,000</h4>
            <h4 className="color1">234,000</h4>
            <h4 className="color1">10,090</h4>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCartList;
