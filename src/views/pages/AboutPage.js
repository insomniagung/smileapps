import React from "react";
import { getAllAbout } from "../../utils/data-about";
import AboutList from "../component/AboutList";

function AboutPage() {
  const [abouts] = React.useState(() => getAllAbout());

  return (
    <section className="about-page">
      <h2 className="about-page__header">Our Team</h2>
      <AboutList abouts={abouts} />
    </section>
  );
}

export default AboutPage;
