import { Link, Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePage";
import logoLove from "../image/logolove2.png";
import ArticlePage from "./pages/ArticlePage";
import AboutPage from "./pages/AboutPage";

function ContentApp() {
  return (
    <div className="app-container">
      <header className="app-bar">
        <div className="app-bar__menu">
          <button id="hamburgerButton">☰</button>
        </div>
        <div className="app-bar__brand">
          <Link to="/" className="logo">
            <img src={logoLove} alt="logo" className="logo__image" />
            <h1>Sistem Informasi Parenting Style</h1>
          </Link>
        </div>
        <nav id="navigationDrawer" className="app-bar__navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/article">Article</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default ContentApp;
