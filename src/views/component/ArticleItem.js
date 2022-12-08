import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/data-local";

function ArticleItem({ id, title, createdAt, body, images }) {
  return (
    <article className="article-item">
      <div className="article-item__header">
        <img src={images} alt="nani" className="artilce-item__image" />
      </div>
      <div className="article-item__content">
        <Link style={{ textDecoration: "none" }} to={`/article/post/${id}`}>
          <h3 className="article-item__title">{title}</h3>
        </Link>
        <p className="article-item__createdAt">{formatDate(createdAt)}</p>
        <p className="article-item__body">
          {body}
          <Link to={`/article/post/${id}`} className="article-item__link">
            more
          </Link>
        </p>
      </div>
    </article>
  );
}

export default ArticleItem;
