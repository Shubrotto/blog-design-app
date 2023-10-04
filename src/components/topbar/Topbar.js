import React from "react";
import "./topbar.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagramSquare,
  FaSearch,
} from "react-icons/fa";
import Image from "../../assets/images/profile.jpg";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="top_left">
        <FaFacebookSquare className="top_icon" />
        <FaTwitterSquare className="top_icon" />
        <FaPinterestSquare className="top_icon" />
        <FaInstagramSquare className="top_icon" />
      </div>
      <div className="top_center">
        <ul className="top_list">
          <li className="top_list_item">HOME</li>
          <li className="top_list_item">ABOUT</li>
          <li className="top_list_item">CONTACT</li>
          <li className="top_list_item">WRITE</li>
          <li className="top_list_item">LOGOUT</li>
        </ul>
      </div>
      <div className="top_right">
        <img className="top_image" src={Image} alt="" />
        <FaSearch className="top_search_icon" />
      </div>
    </div>
  );
};

export default Topbar;
