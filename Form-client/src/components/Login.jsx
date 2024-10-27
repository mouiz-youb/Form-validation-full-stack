import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handelSubmition = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        if (response.data === "seccess") {
          navigate("/home");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <form action="" onSubmit={handelSubmition}>
      <legend>Log In</legend>
      <div className="input-container">
        <input
          type="email"
          placeholder="Enter the email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter hte password "
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="btn-submit">
        <button type="submit">login</button>
      </div>
      <div className="link-to-login">
        <p>don't have an account?</p>
        <Link to="/">Singup</Link>
      </div>
    </form>
  );
}

export default Login;
