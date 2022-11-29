import agung from "../image/profile/agung LI.jpg";
import firman from "../image/profile/firmanLI.jpg";
import sadam from "../image/profile/sadam.jpg";
import santi from "../image/profile/santiLinkedin.jpg";

let about = [
  {
    id: "about-1",
    name: "Agung Gunawan",
    collage: "Universitas Darma Persada",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus iure alias harum. Vitae necessitatibus laborum commodi ullam soluta vel, quidem praesentium, non exercitationem fugiat aliquid ipsa. Ullam, tenetur dolores.",
    profile: "https://www.linkedin.com/in/agunggunawan14/",
    image: agung,
  },
  {
    id: "about-2",
    name: "Firmansyah",
    collage: "Universitas Darma Persada",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus iure alias harum. Vitae necessitatibus laborum commodi ullam soluta vel, quidem praesentium, non exercitationem fugiat aliquid ipsa. Ullam, tenetur dolores.",
    profile: "https://www.linkedin.com/in/firman-sah-711010233/",
    image: firman,
  },
  {
    id: "about-3",
    name: "Santi Septiani",
    collage: "Universitas Bengkulu",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus iure alias harum. Vitae necessitatibus laborum commodi ullam soluta vel, quidem praesentium, non exercitationem fugiat aliquid ipsa. Ullam, tenetur dolores.",
    profile: "https://www.linkedin.com/in/santi-septiani/",
    image: santi,
  },
  {
    id: "about-4",
    name: "Muhammad Sadam Mahendra",
    collage: "Universitas Darma Persada",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus iure alias harum. Vitae necessitatibus laborum commodi ullam soluta vel, quidem praesentium, non exercitationem fugiat aliquid ipsa. Ullam, tenetur dolores.",
    profile: "https://www.linkedin.com/in/muhammad-sadam-mahendra-850a2a233/",
    image: sadam,
  },
];

function getAllAbout() {
  return about;
}

export { getAllAbout };
