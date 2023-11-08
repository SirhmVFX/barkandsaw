import React from "react";
import { Link } from "react-router-dom";

function Favourites() {
  return (
    <>
      <div className="wishlist">
        <div className="wishlist-image">
          <img src="/images/Rectangle 929.png" alt="" />
        </div>

        <div className="wishlist-details">
          <p>Outdoor teak dinning set</p>
          <div className="wishlist-action">
            <h4 className="color1">N250,000</h4>
            <div className="actions-icon">
              <Link>
                <img className="icons" src="/images/ion_cart.png" alt="" />
              </Link>
              <Link>
                <img className="icons" src="/images/icon-delete.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Favourites;
