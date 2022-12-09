import { NavLink, Link, Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePage";
import logoLove from "../image/undraw_family.svg";
import ArticlePage from "./pages/ArticlePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import { getUserLogged, putAccessToken } from "../utils/network-data";
import { useEffect, useState } from "react";
import DetailPage from "./pages/DetailPage";
import { FiLogOut } from "react-icons/fi";

function ContentApp() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  useEffect(() => {
    async function fetchWithData() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    }

    fetchWithData();
  }, []);

  function onLogout() {
    setAuthedUser(null);
    putAccessToken("");
  }

  if (initializing === true) {
    return;
  }

  if (authedUser === null) {
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
        </header>
        <main>
          <Routes>
            <Route
              path="/*"
              element={<LoginPage loginSuccess={onLoginSuccess} />}
            />
          </Routes>
        </main>
      </div>
    );
  }
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
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/article"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Article
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                About
              </NavLink>
            </li>
            <li>
              <button className="button-logout" onClick={onLogout}>
                <Link>
                  Logout <FiLogOut />
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/article/post/:id" element={<DetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/*" element={<LoginPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default ContentApp;
