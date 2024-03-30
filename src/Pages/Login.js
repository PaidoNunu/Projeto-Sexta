import React from "react";
import styles from '../components/Login.module.css'
import logo from '../imgs/logo.jpg'

function login(){
    return(
        <div className={styles.divform}>
            <img className={styles.imglogin} src={logo} alt=""></img>
        <form className={styles.form}>
            <div className={styles.inputConteiner}>
                <label className={styles.label} htmlFor="email">E-mail</label>
                <input className={styles.input} type="text" name="email" id="email" placeholder="email@gmail.com">
                </input>
            </div>

            <div className={styles.inputConteiner}>
                <label className={styles.label} htmlFor="password">Senha</label>
                <input className={styles.input} type="password" name="password" id="password" placeholder="**">
                </input>
            </div>

            <a href="">Esqueceu sua senha</a>

            <button className="buttonLogin">
                Se conectar <img src="" alt=""></img>
            </button>

            <div className="footer">
                <p>Não tem uma conta?</p>
                <a href="#">Crie uma conta</a>
            </div>
        </form>
        </div>
    );
}export default login;