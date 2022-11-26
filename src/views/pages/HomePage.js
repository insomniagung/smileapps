import React from "react";
import bannerImage from "../../image/banner.jpg";

function HomePages() {
  return (
    <div className="homepage-banner">
      <h1 className="homepage-banner__title">Smile Apps</h1>
      <p className="homepage-banner__body">Solusi Keluarga Harmonis</p>
      <button className="homepage-button">Mulai</button>
      <img src={bannerImage} alt="banner" className="homepage-banner__image" />
    </div>
  );
}

export default HomePages;
