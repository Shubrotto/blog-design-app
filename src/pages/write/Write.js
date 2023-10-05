import React from "react";
import "./write.css";
import { BsImages } from "react-icons/bs";

const Write = () => {
  return (
    <div className="write">
      <img
        className="form_img"
        src="https://www.imgcorporations.com/images/bg-img.jpg"
        alt=""
      />
      <form className="write_form">
        <div className="write_form_group">
          <label htmlFor="file_input">
            <BsImages className="form_icon" />
          </label>
          <input type="file" id="file_input" style={{ display: "none" }} />
          <input
            className="write_input"
            type="text"
            autoFocus={true}
            placeholder="Title"
          />
        </div>
        <div className="write_form_group">
          <textarea
            placeholder="Tell your story..."
            className="write_input write_desc_input"
          ></textarea>
        </div>
        <button className="write_submit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
