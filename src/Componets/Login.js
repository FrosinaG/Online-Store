import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";

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
      .post("http://localhost:5000/users/login ", {
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
        <Typography variant="h2">Login</Typography>
        <h2 className="grey">Welcome back! Please login to your account.</h2>
        <form onSubmit={apiCall} className="forma">
          <div className="mb-3">
            <label className="form-label label1">Username</label>
            <Typography variant="body2">Default user :</Typography>

            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              // value={username}
              onChange={user}
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label className="form-label label1">Password</label>
            <Typography variant="body2">Default password:</Typography>

            <input
              type="password"
              className="form-control"
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
          <Button variant="contained" startIcon={<SendIcon />}>
            Submit
          </Button>
        </form>{" "}
      </div>
    </div>
  );
};

export default Login;
