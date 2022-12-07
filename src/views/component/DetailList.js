import React from "react";
import { formatDate } from "../../utils/data-local";

function DetailList({ title, body, createdAt }) {
  return (
    <section className="detail-list">
      <h3>{title}</h3>
      <p>{formatDate(createdAt)}</p>
      <div>{body}</div>
    </section>
  );
}

export default DetailList;
