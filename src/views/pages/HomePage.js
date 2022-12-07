import React from "react";
import wave from "../../image/wave.svg";
import family from "../../image/undraw_family.svg";
import { Link } from "react-router-dom";

function HomePages() {
  return (
    <div className="jumbotron">
      <div className="jumbotron-container">
        <div className="jumbotron-content">
          <h1 className="title">Smile App</h1>
          <p className="text">Selamat datang di Website Sistem Informasi Parenting Style.</p>
          <Link to="/article">
            <button className="button">Mulai </button>
          </Link>
        </div>
        <div className="dummy"></div>
      </div>
      <img className="family" src={family} alt="" />
      <img className="wave" src={wave} alt="" />
    </div>
  );
}

export default HomePages;
