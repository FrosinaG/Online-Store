import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../Redux/productApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import axios from "axios";

const Shop = ({}) => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  
  const dispetch = useDispatch();
  const navigate = useNavigate();

  const [products, setProducts] = useState();
  const [SearchProduct, setSerchProduct] = useState();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(setProducts);
        setSerchProduct(response.data);
      })
      .catch((error) => {
        console.error();
      });
  }, []);

  const hendleAddTocart = (products) => {
    dispetch(addToCart(products));
    navigate("/cart");
  };

  return (
    <div className="shop-container">
      {isLoading ? (
        <div className="d-flex align-items-center loading">
          <strong>Loading...</strong>
          <div
            className="spinner-border ml-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      ) : error ? (
        <p>An error occured...</p>
      ) : (
        <div>
          <h2 className="h-product">
            If shopping doesn't make you happy, then you're in the wrong shop.
          </h2>
          <div>
            <div className="Search">
              <input
                type="text"
                className="search-in"
                placeholder="Search...."
                onChange={(e) => setSerchProduct(e.target.value)}
              />
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4 allcard">
            {data.products
              .filter(
                (data) =>
                  data.title.toLowerCase().includes(SearchProduct) ||
                  data.brand.toLowerCase().includes(SearchProduct)
              )
              .map((products) => {
                return (
                  <div className="card cardbox" key={products.id}>
                    <img
                      src={products.thumbnail}
                      className="card-img-top productsimg"
                      alt={products.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{products.title}</h5>
                      <p className="card-text">
                        <b>Description :</b> {products.description}
                      </p>

                      <Link
                        to={`/singelproduct/${products.id}`}
                        className="card-link"
                      >
                        View more
                      </Link>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item price">
                        <b>Price :</b>
                        {products.price} €
                      </li>{" "}
                      <button
                        onClick={() => hendleAddTocart(products)}
                        type="button"
                        className="btn btn-primary addto"
                      >
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-cart-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        Add To Cart
                      </button>
                    </ul>
                  </div>
                );
              })}
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4 allcard">
            {data.products.map((products) => {
              return (
                <div className="card cardbox" key={products.id}>
                  <img
                    src={products.thumbnail}
                    className="card-img-top productsimg"
                    alt={products.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{products.title}</h5>
                    <p className="card-text">
                      <b>Description :</b> {products.description}
                    </p>

                    <Link
                      to={`/singelproduct/${products.id}`}
                      className="card-link"
                    >
                      View more
                    </Link>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item price">
                      <b>Price :</b>
                      {products.price} €
                    </li>{" "}
                    <button
                      onClick={() => hendleAddTocart(products)}
                      type="button"
                      className="btn btn-primary addto"
                    >
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-cart-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                      Add To Cart
                    </button>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
