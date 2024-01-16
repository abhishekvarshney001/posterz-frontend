

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { BsCart2 } from "react-icons/bs";
// import { TbSearch } from "react-icons/tb";
// import { AiOutlineHeart } from "react-icons/ai";
// import  Search  from "../navbar/Search/Search";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";

function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  // const [showSearch, setShowSearch] = useState(false);
  const categories = useSelector((state) => state.categoryReducer.categories);
  const cart = useSelector((state) => state.cartReducer.cart);
  let totalItems = 0;
  cart.forEach((item) => (totalItems += item.quantity));
  // cart.forEach((item) => {
  //   // Check if item is not null or undefined before accessing its properties
  //   if (item && item.quantity) {
  //     totalItems += item.quantity;
  //   }
  // });

  return (
    <>
      <nav className="Navbar">
        <div className="container nav-container">
          <div className="nav-left">
            <ul className="link-group">
              {categories?.map((category) => (
                <li className="hover-link" key={category.id}>
                  <Link
                    className="link"
                    to={`/category/${category.attributes.key}`}
                  >
                    {category.attributes.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-center">
            <Link to="/">
              <h1 className="banner">Posterz.</h1>
            </Link>
          </div>
          <div className="nav-right ">
            <div
              className="nav-cart hover-link"
              onClick={() => setOpenCart(!openCart)}
            >
              <BsCart2 className="icon" />
              {totalItems > 0 && <span className="cart-count center">{totalItems}</span>}
            </div>
          </div>
        </div>
      </nav>
      {openCart && <Cart onClose={() => setOpenCart(false)} />}
      {/* {showSearch && <Search setShowSearch={setShowSearch}/>} */}
    </>
  );
}

export default Navbar;
