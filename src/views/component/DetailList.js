import React from "react";
import { formatDate } from "../../utils/data-local";

function DetailList({ title, body, createdAt, images }) {
  const bodyMank = body.split("<br/>");
  return (
    <section className="detail-list">
      <img src={images} alt="artikel-detail" className="detail-img"></img>
      <div className="content-detail">
        <h3>{title}</h3>
        <span>{formatDate(createdAt)}</span>
        {bodyMank.map((bodyCoy, i) => (
          <p key={i}>{bodyCoy}</p>
        ))}
      </div>
    </section>
  );
}

export default DetailList;
