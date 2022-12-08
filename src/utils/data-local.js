import bayi1 from "../image/article-img/bayi1.jpg";
import bayi2 from "../image/article-img/bayi2.png";
import bayi3 from "../image/article-img/bayi3.jpg";
import balita1 from "../image/article-img/balita1.png";
import balita2 from "../image/article-img/balita2.png";
import balita3 from "../image/article-img/balita3.jpg";
import resep1 from "../image/article-img/resep1.jpg";
import resep2 from "../image/article-img/resep2.jpg";
import resep3 from "../image/article-img/resep.jpg";
import keluarga1 from "../image/article-img/usiasekolah4.jpg";
import keluarga2 from "../image/article-img/usiasekolah3.jpg";
import keluarga3 from "../image/article-img/usiasekolah1.jpg";

let articles = [
  {
    id: "article-bayi-1",
    images: bayi1,
    title: "9 Tanda Bayi Sedang Tumbuh Gigi",
    kategori: "",
    body: "Inilah beberapa ciri-ciri bayi tumbuh gigi. Salah duanya mirip gejala sakit, yaitu ...",
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: "article-bayi-2",
    images: bayi2,
    title: "Anak Masukkan Benda ke Mulut? Hindari Selalu Melarangnya!",
    body: "Benda apa pun yang ditemuinya selalu dimasukkan ke dalam mulut, baik karena penasaran atau memang kebiasaan? ...",
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: "article-bayi-3",
    images: bayi3,
    title: "Cermat Memilih, Cegah Ruam Popok Muncul",
    body: "Kulit bayi masih sensitif...",
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: "article-balita-1",
    images: balita1,
    title:
      "Update Gangguan Ginjal Akut Progresif: Antidotum Sudah Mulai Berdatangan",
    body: "Mengantisipasi bertambahnya korban Gangguan Ginjal Akut, pemerintah mengupayakan berbagai hal termasuk mendatangkan ...",
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: "article-balita-2",
    images: balita2,
    title: "Cermati Ini! Daftar Obat Sirup Hasil Uji BPOM RI",
    body: "Pada tanggal 23 Oktober 2022 lalu, BPOM RI merilis 23 obat sirup aman digunakan ...",
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: "article-balita-3",
    images: balita3,
    title:
      "Update Gangguan Ginjal Akut Atipikal pada Anak: 5 Obat Sirup Anak Akan Ditarik dari Peredaran",
    body: "Pihak BPOM RI telah melakukan pengujian terhadap 26 sirup obat, hasilnya , 5 produk menunjukkan adanya ...",
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: "article-resep-1",
    images: resep1,
    title: "Nutrisi Sandwich untuk Bekal Sekolah",
    body: "Tambahkan isian sandwich dengan makanan yang kaya nutrisi. ...",
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: "article-resep-2",
    images: resep2,
    title: "Resep: Pear Tart",
    body: "Ingin mencoba kue terbuat dari buah? Mungkin resep ini bisa Anda praktikkan di rumah! ...",
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: "article-resep-3",
    images: resep3,
    title: "Menyelipkan Buah di Masakan Rumah, Ini Manfaatnya!",
    body: "Tak kalah enaknya dengan disantap langsung, membuat sensasi seru dalam masakan. ...",
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: "article-keluarga-1",
    images: keluarga1,
    title: "Papa Perlu Lakukan Ini Saat Anak Perempuan Beranjak Remaja",
    body: "Kebutuhannya lebih kompleks daripada saat ia masih balita. ...",
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: "article-keluarga-2",
    images: keluarga2,
    title: "Swamedikasi di Rumah, Bolehkah?",
    body: "Swamedikasi atau upaya pengobatan mandiri di rumah, dikatakan para ahli ibarat pedang bermata dua. ...",
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: "article-keluarga-3",
    images: keluarga3,
    title: "7 Langkah Lindungi Anak dari Bullying",
    body: "Yuk, ikuti saran Hanlie Muliani, M.Psi berikut! ...",
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
