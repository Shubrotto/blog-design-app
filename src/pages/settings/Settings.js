import React from "react";
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Profile from "../../assets/images/profile.jpg";
import { FaRegUserCircle } from "react-icons/fa";

const Setting = () => {
  return (
    <div className="settings">
      <div className="setting_wrapper">
        <div className="setting_title">
          <span className="setting_update_title">Update Your Account</span>
          <span className="setting_delete_title">Delete Account</span>
        </div>
        <form className="setting_form">
          <label>Profile Picture</label>
          <div className="setting_pp">
            <img src={Profile} alt="" className="setting_pp_img" />
            <label htmlFor="file_input">
              <FaRegUserCircle className="file_input_icon" />
            </label>
            <input type="file" id="file_input" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="UserName" />
          <label>Email</label>
          <input type="email" placeholder="xyz@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="setting_update_submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
