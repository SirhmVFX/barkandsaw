import React from "react";

import Favourites from "../components/Favourites";
import ShoppingCart from "../components/ShoppingCart";

function Wishlist() {
  return (
    <>
      <section className="store-header">
        <h2>Wishlist</h2>

        <div className="all-products">
          <Favourites />
          <Favourites />
          <Favourites />
          <Favourites />
          <Favourites />
          <Favourites />
        </div>
      </section>
    </>
  );
}

export default Wishlist;
