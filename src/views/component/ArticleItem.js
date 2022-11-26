import React from "react";
import gambar from "../../image/logo.png";

function ArticleItem({ title, createdAt, body }) {
  return (
    <article className="article-item">
      <div className="article-item__header">
        <img src={gambar} alt="nani" className="artilce-item__image" />
      </div>
      <div className="article-item__content">
        <h3 className="article-item__title">{title}</h3>
        <p className="article-item__createdAt">{createdAt}</p>
        <p className="article-item__body">{body}</p>
      </div>
    </article>
  );
}

export default ArticleItem;
