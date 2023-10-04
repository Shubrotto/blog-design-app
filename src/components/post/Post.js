import React from "react";
import "./post.css";

const post = () => {
  return (
    <div className="post">
      <img
        className="post_img"
        src="https://imagevars.gulfnews.com/2016/8/22/1_16a08235b60.1883453_2591307674_16a08235b60_medium.jpg"
        alt=""
      />
      <div className="post_info">
        <div className="post_cats">
          <span className="post_cat">Music</span>
          <span className="post_cat">Life</span>
        </div>
        <span className="post_title">Lorem ipsum dolor sit.</span>
        <hr />
        <span className="post_date">1 hour ago</span>
      </div>
      <p className="post_desc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quo
        earum amet rem asperiores incidunt maxime, odit dolores dignissimos sint
        illum, ipsum nobis debitis aut eligendi reprehenderit hic repellat eius?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quo
        earum amet rem asperiores incidunt maxime, odit dolores dignissimos sint
        illum, ipsum nobis debitis aut eligendi reprehenderit hic repellat eius?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quo
        earum amet rem asperiores incidunt maxime, odit dolores dignissimos sint
        illum, ipsum nobis debitis aut eligendi reprehenderit hic repellat eius?
      </p>
    </div>
  );
};

export default post;
