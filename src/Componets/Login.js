import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPasword] = useState();

  let navigate = useNavigate();

  const user = (e) => {
    setUsername(e.target.value);
  };
  const pass = (e) => {
    setPasword(e.target.value);
  };
  const apiCall = (e) => {
    e.preventDefault();
    axios
      .post("https://dummyjson.com/auth/login ", {
        username: username,
        password: password,
      })
      .then((respons) => {
        console.log(respons.data);
        localStorage.setItem("token", JSON.stringify(respons.data.token));
        navigate("/cart");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className="login-cont">
      <div className="loginfrom">
        <h1>Login</h1>
        <h2 className="grey">Welcome back! Please login to your account.</h2>
        <form onSubmit={apiCall} className="forma">
          <div className="mb-3">
            <label className="form-label label1">Username </label>
            <p className="default-login">Default user :atuny0</p>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              // value={username}
              onChange={user}
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label className="form-label label1">Password</label>
            <p className="default-login">Default password:9uQFF1Lh </p>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              // value={password}
              onChange={pass}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label label1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>{" "}
      </div>
    </div>
  );
};

export default Login;
