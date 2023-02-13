import axios from "axios";
import React, { useEffect, useState } from "react";
import Shop from "./Shop";

import useContext from "../Hooks/useContext";


const Search = () => {
  const [productList, setProductsList] = useState();
  const [foundProducts, setFoundProducts] = useState();
  const url = "https://dummyjson.com/products";
  const { data } = useContext(url);

  useEffect(() => {
    if (data) setProductsList(data);
  }, [data]);

  const search = (value) => {
    if (!value) {
      setFoundProducts(null)
      return
    }
    const product =productList.find(
      (item) =>
        item.title.toLowerCase().includes(value) ||
        item.brand.toLowerCase().includes(value) 
    );
    setFoundProducts(product)
  };

  return (
    <>
      <div className="search">
        {" "}
        <input
          type="text"
          className="search-in"
          placeholder="Search...."
          onChange={(e) => search(e.target.value)}
        />
      </div>
      <div>
        {
          foundProducts ? <Shop products={foundProducts} /> : null            
        }
      </div>
    </>
  );
};

export default Search;
