import agung from "../image/profile/agung.jpg";
import firman from "../image/profile/firman.jpg";
import sadam from "../image/profile/sadam.jpg";
import santi from "../image/profile/santi.png";

let about = [
  {
    id: "about-1",
    name: "Agung Gunawan",
    collage: "darma persada",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus iure alias harum. Vitae necessitatibus laborum commodi ullam soluta vel, quidem praesentium, non exercitationem fugiat aliquid ipsa. Ullam, tenetur dolores.",
    profile: "https://github.com/insomniagung",
    image: agung,
  },
  {
    id: "about-2",
    name: "Firmansyah",
    collage: "darma persada",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus iure alias harum. Vitae necessitatibus laborum commodi ullam soluta vel, quidem praesentium, non exercitationem fugiat aliquid ipsa. Ullam, tenetur dolores.",
    profile: "https://github.com/firmanxyz",
    image: firman,
  },
  {
    id: "about-3",
    name: "Santi Septianti",
    collage: "jauh",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus iure alias harum. Vitae necessitatibus laborum commodi ullam soluta vel, quidem praesentium, non exercitationem fugiat aliquid ipsa. Ullam, tenetur dolores.",
    profile: "https://github.com/Septiani272",
    image: santi,
  },
  {
    id: "about-4",
    name: "Muhammad Sadam Mahendra",
    collage: "Darma Persada",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus iure alias harum. Vitae necessitatibus laborum commodi ullam soluta vel, quidem praesentium, non exercitationem fugiat aliquid ipsa. Ullam, tenetur dolores.",
    profile: "https://github.com/SadamMahendra",
    image: sadam,
  },
];

function getAllAbout() {
  return about;
}

export { getAllAbout };
