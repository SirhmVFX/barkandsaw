import React from "react";
import { Link } from "react-router-dom";

function ShoppingCart(props) {
  return props.trigger ? (
    <>
      <div className="shopping-cart">
        <div className="shopping-list">
          <Link onClick={() => props.setTrigger(false)}>
            <img className="icons" src="/images/cancel.png" alt="" />
          </Link>
          {props.children}
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default ShoppingCart;
