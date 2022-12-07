import React from "react";
import ArticleItem from "./ArticleItem";

function ArticleList({ articles }) {
  return articles.length === 0 ? (
    <section className="articles-list">Nothing article to see for now.</section>
  ) : (
    <section className="articles-list">
      {articles.map((article) => {
        return <ArticleItem key={article.id} {...article} />;
      })}
    </section>
  );
}

export default ArticleList;
