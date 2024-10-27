import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";
function Singup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handelSubmition = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/Registration", {
        username,
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        navigate("/home");
      })
      .catch((error) => console.log(error));
  };
  return (
    <form action="" onSubmit={handelSubmition}>
      <legend>Registration</legend>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter the username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
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
        <button type="submit">Sign up</button>
      </div>
      <div className="link-to-login">
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
      </div>
    </form>
  );
}

export default Singup;
