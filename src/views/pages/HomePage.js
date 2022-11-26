import React from "react";
import bannerImage from "../../image/banner.jpg";

function HomePages() {
  return (
    <div className="homepage-banner">
      <h1 className="homepage-text">Smile Apps</h1>
      <p className="">Harmonious Family Solution</p>
      <img src={bannerImage} alt="banner" />
    </div>
  );
}

export default HomePages;
