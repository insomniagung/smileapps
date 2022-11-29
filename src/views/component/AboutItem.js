import linkedin from "../../image/linkedin.png";

function AboutItem({ name, collage, body, profile, image }) {
  return (
    <section className="about-item">
      <img className="about-item__image" src={image} alt="" />
      <h3 className="about-item__name">{name}</h3>
      <p className="about-item__collage">{collage}</p>
      {/* <p className="about-item__body">{body}</p> */}
      <a href={profile} target="_blank" rel="noreferrer" className="about-item__link">
        <img src={linkedin} alt="{name}" className="about-item__icon" />
      </a>
    </section>
  );
}

export default AboutItem;
