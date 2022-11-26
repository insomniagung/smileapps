import AboutItem from "./AboutItem";

function AboutList({ abouts }) {
  return (
    <section className="abouts-list">
      {abouts.map((about) => (
        <AboutItem key={about.id} {...about} />
      ))}
    </section>
  );
}

export default AboutList;
