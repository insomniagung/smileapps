import { Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePage";

function ContentApp() {
  return (
    <div className="app-container">
      <header>
        <h1>SmileApp</h1>
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
