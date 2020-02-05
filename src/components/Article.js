import React from "react";
import "../styles/style.css";

const Article = props => {
  return (
    <article className="Article-card">
      <figure>
        <img src={props.imgUrl} alt={props.name} />
      </figure>
      <h3>{props.name}</h3>
      <small>{props.date} </small>
    </article>
  );
};

export default Article;
