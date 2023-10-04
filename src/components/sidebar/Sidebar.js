import React from "react";
import "./sidebar.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_item">
        <span className="sidebar_title">ABOUT ME</span>
        <img
          src="https://gamesandgatherings.com/wp-content/uploads/2022/12/Friendsmas-Christmas-Party-Theme-Idea-500x500.jpg?ezimgfmt=rs:371x371/rscb1"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          nostrum ratione libero, asperiores placeat voluptatem dolor ab saepe
          non at pariatur similique officia accusantium impedit quod minima
          quisquam error voluptatibus.
        </p>
      </div>
      <div className="sidebar_item">
        <span className="sidebar_title">CATAGORIES</span>
        <ul className="sidebar_list">
          <li className="sidebar_list_item">Life</li>
          <li className="sidebar_list_item">Music</li>
          <li className="sidebar_list_item">Style</li>
          <li className="sidebar_list_item">Sport</li>
          <li className="sidebar_list_item">Tech</li>
          <li className="sidebar_list_item">Cinema</li>
        </ul>
      </div>
      <div className="sidebar_item">
        <span className="sidebar_title">FOLLOW US</span>
        <div className="sidebar_social">
          <FaFacebookSquare className="sidebar_icon" />
          <FaTwitterSquare className="sidebar_icon" />
          <FaPinterestSquare className="sidebar_icon" />
          <FaInstagramSquare className="sidebar_icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
