import { Link, Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePage";
import logoLove from "../image/logolove2.png";

function ContentApp() {
  return (
    <div className="app-container">
      <header className="app-bar">
        <div class="app-bar__menu">
          <button id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar__brand">
          <Link to="/" className="logo">
            <img src={logoLove} alt="logo" /><h1>Sistem Informasi Parenting Style</h1>
          </Link>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
          <ul>
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">Article</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePages />} />
        </Routes>
      </main>
    </div>
  );
}

export default ContentApp;
