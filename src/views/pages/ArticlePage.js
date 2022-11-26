import { useState } from "react";
import { getAllArticle } from "../../utils/data-local";
import ArticleList from "../component/ArticleList";

function ArticlePage() {
  const [articles] = useState(() => getAllArticle());

  return (
    <section className="articlePage">
      <h2 className="articlePage__header">Kuy mank di baca</h2>
      <ArticleList articles={articles} />
    </section>
  );
}

export default ArticlePage;
