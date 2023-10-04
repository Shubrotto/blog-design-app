import React from "react";
import "./singlePost.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";

const SinglePost = () => {
  return (
    <div className="single_post">
      <div className="single_post_wrapper">
        <img
          src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
          alt=""
          className="single_post_img"
        />
        <h1 className="single_post_title">
          Lorem ipsum dolor sit.
          <div className="single_post_edit">
            <FiEdit className="single_post_icon" />
            <RiDeleteBin5Fill className="single_post_icon" />
          </div>
        </h1>
        <div className="single_post_info">
          <span className="single_post_author">
            Author: <b>Shubrotto</b>
          </span>
          <span className="single_post_date">2 hour ago</span>
        </div>
        <p className="single_post_desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illum
          dolorum quibusdam. Ipsum, accusamus quod. Nam, numquam. Non sit id qui
          facere eum similique, voluptatem, inventore officiis sunt vitae
          laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor illum dolorum quibusdam. Ipsum, accusamus quod. Nam, numquam.
          Non sit id qui facere eum similique, voluptatem, inventore officiis
          sunt vitae laborum? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolor illum dolorum quibusdam. Ipsum, accusamus quod. Nam,
          numquam. Non sit id qui facere eum similique, voluptatem, inventore
          officiis sunt vitae laborum? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolor illum dolorum quibusdam. Ipsum, accusamus
          quod. Nam, numquam. Non sit id qui facere eum similique, voluptatem,
          inventore officiis sunt vitae laborum? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolor illum dolorum quibusdam. Ipsum,
          accusamus quod. Nam, numquam. Non sit id qui facere eum similique,
          voluptatem, inventore officiis sunt vitae laborum? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Dolor illum dolorum quibusdam.
          Ipsum, accusamus quod. Nam, numquam. Non sit id qui facere eum
          similique, voluptatem, inventore officiis sunt vitae laborum? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Dolor illum dolorum
          quibusdam. Ipsum, accusamus quod. Nam, numquam. Non sit id qui facere
          eum similique, voluptatem, inventore officiis sunt vitae laborum?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
