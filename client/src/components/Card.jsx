import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div className="card">
      <Link to={`/post/${props.post.id}`}>
        <span className="title">{props.post.title}</span>
        <img src={props.post.img} alt="" className="cardImage" />
        <p className="desc">{props.post.desc}</p>
        <button className="cardButton">Read More</button>
      </Link>
    </div>
  );
};
