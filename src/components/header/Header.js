import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_title">
        <span className="header_titile_sm">React & Node</span>
        <span className="header_titile_lg">Blog</span>
      </div>
      <img
        className="header_img"
        src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?cs=srgb&dl=pexels-lumn-167699.jpg&fm=jpg"
        alt=""
      />
    </div>
  );
};

export default Header;
