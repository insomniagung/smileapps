import React from "react";
import ArticleItem from "./ArticleItem";

function ArticleList({ articles }) {
  return (
    <section className="articles-list">
      {articles.map((article) => {
        return <ArticleItem key={article.id} {...article} />;
      })}
    </section>
  );
}

export default ArticleList;
