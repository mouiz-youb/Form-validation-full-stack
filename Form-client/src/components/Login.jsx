import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasszord] = useState("");
  return (
    <form action="">
      <legend>Log In</legend>
      <div className="input-container">
        <input type="email" placeholder="Enter the email" />
        <input type="password" placeholder="Enter hte password " />
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
