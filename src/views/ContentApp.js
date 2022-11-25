import { Link, Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePage";

function ContentApp() {
  return (
    <div className="app-container">
      <header className="app-bar">
        <div class="app-bar__menu">
          <button id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar__brand">
          <Link to="/">
            <h1>SmileApp</h1>
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
              <Link to="#">About-us</Link>
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
