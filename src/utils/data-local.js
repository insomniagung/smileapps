let articles = [
  {
    id: "article-1",
    title: "Cara Mendapatkan Hak Asuh Anak Bersama",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus iure alias harum. Vitae necessitatibus laborum commodi ullam soluta vel, quidem praesentium, non exercitationem fugiat aliquid ipsa. Ullam, tenetur dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus iure alias harum. Vitae necessitatibus laborum commodi ullam soluta vel, quidem praesentium, non exercitationem fugiat aliquid ipsa. Ullam, tenetur dolores.",
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: "article-2",
    title: "Cara Mengasuh Anak",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus iure alias harum. Vitae necessitatibus laborum commodi ullam soluta vel, quidem praesentium, non exercitationem fugiat aliquid ipsa. Ullam, tenetur dolores.",
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: "article-3",
    title: "Cara mendapatkan kembali hak asuh bayi atau anak",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus iure alias harum. Vitae necessitatibus laborum commodi ullam soluta vel, quidem praesentium, non exercitationem fugiat aliquid ipsa. Ullam, tenetur dolores.",
    createdAt: "2022-04-14T04:27:34.572Z",
  },
];

function getAllArticle() {
  return articles;
}

function getArticle(id) {
  const foundArticle = articles.find((article) => article.id === id);
  return foundArticle;
}

const formatDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getAllArticle, getArticle, formatDate };
