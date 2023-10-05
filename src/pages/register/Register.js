import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="register_title">Register</span>
      <form className="register_form">
        <label>Username</label>
        <input type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input type="email" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" />
        <button className="register_button">Register</button>
        <button className="register_login_button">Login</button>
      </form>
    </div>
  );
};

export default Register;
