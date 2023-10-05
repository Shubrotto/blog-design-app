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
import { Link } from "react-router-dom";

const Topbar = () => {
  const user = false;
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
          <li className="top_list_item">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="top_list_item">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="top_list_item">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="top_list_item">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="top_list_item">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="top_right">
        {user ? (
          <img className="top_image" src={Image} alt="" />
        ) : (
          <>
            <ul className="top_list">
              <li className="top_list_item">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="top_list_item">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          </>
        )}

        <FaSearch className="top_search_icon" />
      </div>
    </div>
  );
};

export default Topbar;
