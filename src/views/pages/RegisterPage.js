import React from "react";
import RegisterInput from "../component/RegisterInput";
import {Link } from 'react-router-dom';
import {register} from "../../utils/network-data";

function RegisterPage(){
    async function onRegisterHandler(user){
        await register(user);
    }

    return (
        <section className="registerPage__wrapper">
          <div className="registerPage">
            <h2> Isi form untuk mendaftar akun </h2>
            <RegisterInput register={onRegisterHandler} />
            <p>"Sudah punya akun? "<Link to="/login"> "Login Di sini"</Link></p>
        </div>
        </section>
    )
}

export default RegisterPage;