import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from '../components/Login.module.css'
import logo from '../imgs/lixozero2.png'
import bg from '../imgs/background.jpg'

function Login(){
    let navigate = useNavigate();
    function voltaHome() {
        navigate('/');
    }

    return(
        <div className={styles.loginpage}>
             <div className={styles.centralizar}>
             <div className={styles.divform}>
            <img className={styles.imglogin} src={logo} alt=""></img>
        <form className={styles.form}>
            <div className={styles.inputConteiner}>
                <label className={styles.label} htmlFor="email">E-mail</label>
                <input className={styles.input1} type="text" name="email" id="email" placeholder="exemplo@gmail.com">
                </input>
            </div>

            <div className={styles.inputConteiner}>
                <label className={styles.label} htmlFor="password">Senha</label>
                <input className={styles.input2} type="password" name="password" id="password" placeholder="*******">
                </input>
            </div>
            <div className={styles.inputbotao}>
                <input className={styles.input3} type="submit" name="submit" id="submit" value="ENTRAR" onClick={voltaHome}></input>
            </div>
            <Link to="/Cadastro" className={styles.linkCadastro}>Cadastre aqui</Link>
        </form>
        </div>
             </div>
        </div>
       
    );
}export default Login;