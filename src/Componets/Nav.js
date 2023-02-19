import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LensIcon from "@mui/icons-material/Lens";


const Nav = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <div className="nav-cont nav-mob">
      <ul className="nav justify-content-center mob-ul">
        <Link to="/">
          <img src={logo} alt="logo" className="logo " />
        </Link>

        <li className="nav-item limob">
          <Link to="/" className="nav-link linknav" aria-current="page">
            <IconButton>
              <HomeIcon area-label="home" size="small" color="info" />
            </IconButton>
            Home
          </Link>
        </li>

        <li className="nav-item limob1">
          <Link to="shop" className="nav-link linknav">
            <IconButton>
              <LensIcon area-label="home" size="small" color="info" />
            </IconButton>
            Shop
          </Link>
        </li>
        <li className="nav-item limob">
          <Link to="contact" className="nav-link linknav">
            <IconButton>
              <LensIcon area-label="home" size="small" color="info" />
            </IconButton>
            Contact
          </Link>
        </li>
        <li className="nav-item limob1">
          <Link to="login" className="nav-link linknav">
            <IconButton>
              <VpnKeyIcon area-label="home" size="small" color="info" />
            </IconButton>
            Login
          </Link>
        </li>
        <li className="nav-item limob">
          <Link to="cart" className="cartlink nav-link linknav">
            <IconButton>
              <ShoppingCartIcon color="info" size="small" />
            </IconButton>

            <span className="bag-qoantity">
              <span>{cartTotalQuantity}</span>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
