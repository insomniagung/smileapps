import React from "react";

import ContentApp from "./views/ContentApp";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// styles ?
import "./styles/style.css";
import "./styles/responsive.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ContentApp />
  </BrowserRouter>
);
