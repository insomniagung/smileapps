import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1>Halaman 404</h1>
      <p>
        Opps sepertinya kamu salah halaman, yuk balik ke
        <Link to="/">Home Page</Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
