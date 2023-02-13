import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap";
import "./App.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Componets/Nav";
import Home from "./Componets/Home";
import SingleProducts from "./Componets/SingleProducts";
import Login from "./Componets/Login";
import { Contact } from "./Componets/Contact";
import Footer from "./Componets/Footer";
import NotFound from "./Componets/NotFound";
import Shop from "./Componets/Shop";
import Cart from "./Componets/Cart";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./Redux/store";
import PrivareRoure from "./Componets/PrivareRoure";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="singelproduct/:id" element={<SingleProducts />} />
          <Route element={<PrivareRoure />}>
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
