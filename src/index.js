import React from "react";

import ContentApp from "./views/ContentApp";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// styles ?
import "./styles/style.css";
import "./styles/homepage.css";
import "./styles/responsive.css";
import "./styles/articlePage.css";
import "./styles/aboutPage.css";
import "./styles/loginPage.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ContentApp />
  </BrowserRouter>
);
