import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCart,
  removeFromCart,
  getTotals,
} from "../Redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
  };
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const HandleRemoveFromCart = (cartItems) => {
    dispatch(removeFromCart(cartItems));
  };
  const handleDecreaseCart = (cartItems) => {
    dispatch(decreaseCart(cartItems));
  };
  const handleIncreaseCart = (cartItems) => {
    dispatch(addToCart(cartItems));
  };
  const handleClearCart = (cartItems) => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your Cart Is Empty</p>
          <div className="start-shopping">
            <Link to="/shop" className="start-shopping">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="titles">
            <div className="cart-items">
              {cart.cartItems?.map((cartItems) => (
                <div className="allofCart" key={cartItems.id}>
                  <div className="cart-item">
                    <div className="cart-product">
                      <div className="cart-thumbnail part">
                        <p className="category">{cartItems.category}</p>
                        <img
                          src={cartItems.thumbnail}
                          alt={cartItems.title}
                          className="img-thum"
                        />
                      </div>
                      <div className="text part">
                        <h3 className="h-cart">Product</h3>

                        <h2>{cartItems.title}</h2>
                        <p className="card-text">
                          {cartItems.brand}
                          <b>Description :</b> {cartItems.description}
                        </p>
                        <p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill stars"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill stars"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill stars"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill stars"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill stars"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                          {cartItems.rating}
                        </p>
                      </div>
                      <div className="Cart-quantity part">
                        <h3 className="h-cart">Price</h3>

                        <div className="product-price ">
                          <p className="price1 price ">${cartItems.price}</p>
                        </div>
                      </div>
                      <div className="Cart-quantity part">
                        <h3 className="h-cart">Quantity</h3>
                        <div className="buttonQ">
                          <button
                            onClick={() => handleDecreaseCart(cartItems)}
                            className="btn btn-outline-secondary"
                          >
                            -
                          </button>
                          <div className="cart-qua">
                            {cartItems.cartQuantity}
                          </div>
                          <button
                            onClick={() => handleIncreaseCart(cartItems)}
                            className="btn btn-outline-secondary"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="cart-total-price part">
                        <h3 className="h-cart">Total</h3>
                        <p className="totalprice price ">
                          ${cartItems.price * cartItems.cartQuantity}
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="remove-btn">
                    {" "}
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => HandleRemoveFromCart(cartItems)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="end-cart">
              <div className="  cart-summary">
                <button
                  className=" btn btn-primary"
                  onClick={() => handleClearCart()}
                >
                  Clear cart
                </button>
              </div>
              <div className="continue-shopping">
                <Link to="/shop" className="start-shopping">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
              <div className="totalend">
                <span> Total ${cart.cartTotalAmount}</span>
              </div>
            </div>
          </div>
        </>
      )}

      <button className=" btn btn-primary" onClick={logout}>
        Log out
      </button>
    </div>
  );
};

export default Cart;
