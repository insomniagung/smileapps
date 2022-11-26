import img from "../../image/logo.png";

function AboutItem({ name, collage, body }) {
  return (
    <section className="about-item">
      <img className="about-item__image" src={img} alt="" />
      <h3 className="about-item__name">{name}</h3>
      <p className="about-item__collage">{collage}</p>
      {/* <p className="about-item__body">{body}</p> */}
    </section>
  );
}

export default AboutItem;
