import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

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
        <button className="register_login_button">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Register;
