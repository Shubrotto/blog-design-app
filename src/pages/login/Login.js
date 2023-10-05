import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <span className="login_title">Login</span>
      <form className="login_form">
        <label>Email</label>
        <input type="email" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" />
        <button className="login_button">Login</button>
      </form>
      <button className="login_register_button">Register</button>
    </div>
  );
};

export default Login;
