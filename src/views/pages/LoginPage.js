import LoginInput from "../component/LoginInput";
import { login } from "../../utils/network-data";
import playTime from "../../image/play_time.svg";
import { Link } from "react-router-dom";

function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <div className="loginPage__wrapper">
      <div className="loginPage">
        <div className="content-left">
          <h1 className="title">Login</h1>
          <p className="text">Selamat Datang Silahkan Login Terlebih Dahulu</p>
          <LoginInput valueState={onLogin} />
          <p>
            Belum punya akun?<Link to="/register">Daftar disini</Link>
          </p>
        </div>
        <div className="content-right">
          <img src={playTime} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
