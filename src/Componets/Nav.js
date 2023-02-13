import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import { useSelector } from "react-redux";

const Nav = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <div className="nav-cont nav-mob">
      <ul className="nav justify-content-center mob-ul">
      <Link to ="/" ><img src={logo} alt="logo" className="logo " /></Link>
        <li className="nav-item limob">
          <Link to="/" className="nav-link linknav" aria-current="page">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-house-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
              <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
            </svg>
            Home
          </Link>
        </li>

        <li className="nav-item limob">
          <Link to="shop" className="nav-link linknav">
            Shop
          </Link>
        </li>
        <li className="nav-item limob">
          <Link to="contact" className="nav-link linknav">
            Contact
          </Link>
        </li>
        <li className="nav-item limob">
          <Link to="login" className="nav-link linknav">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
            Login
          </Link>
        </li>
        <div className="nav-bag limob">
          <Link to="cart" className="cartlink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-handbag-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
            </svg>
            <span className="bag-qoantity">
              <span>{cartTotalQuantity}</span>
            </span>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
