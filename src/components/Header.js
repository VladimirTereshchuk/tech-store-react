import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.svg";
import CartLink from "./Cart/CartLink";
import { UserContext } from "../context/user";
import LoginLink from "./LoginLink";
// import { CartContext } from "../context/cart";
import { GiTechnoHeart } from "react-icons/gi";

export default function Header() {
  const { user } = React.useContext(UserContext);
  // const { clearCart } = React.useContext(CartContext);
  return (
    <header className="header">
      {/* <img src={logo} alt="vintage tech logo" className="logo" /> */}
      <GiTechnoHeart className="logo" />

      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Product</Link>
            </li>
            {user.token && (
              <li>
                <Link to="checkout">checkout</Link>
              </li>
            )}
          </div>
          {/* <div> */}
          {/* </div> */}
          <div>
            <LoginLink />
            <CartLink />
          </div>
        </ul>
      </nav>
    </header>
  );
}
