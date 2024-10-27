import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";
function Singup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handelSubmition = (e) => {
    e.preventDefault();
    axios
      .post("/register", { username, email, password })
      .then((response) => console.log(response))
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
