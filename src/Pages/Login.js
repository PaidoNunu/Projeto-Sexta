import React from "react";
import styles from '../components/Login.module.css'
import logo from '../imgs/imgLogin.png'

function login(){
    return(
        <div className={styles.divform}>
            <div className={styles.imgloginbg}>
            <img className={styles.imglogin} src={logo} alt=""></img>
                </div>
        <form className={styles.form}>
            <div className={styles.inputConteiner}>
                <label className={styles.label} htmlFor="email">E-mail</label>
                <input className={styles.input1} type="text" name="email" id="email" placeholder="Digite Seu melhor e-mail">
                </input>
            </div>

            <div className={styles.inputConteiner}>
                <label className={styles.label} htmlFor="password">Senha</label>
                <input className={styles.input2} type="password" name="password" id="password" placeholder="****">
                </input>
            </div>
        </form>
        </div> 
       
    );
}export default login;