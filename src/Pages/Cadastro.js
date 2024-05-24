import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../components/Cadastro.module.css'
import { Link } from 'react-router-dom';
import logo from '../imgs/lixozero2.png'
function Cadastro(){
    return(
        <div className={styles.divmae}>
             <div className={styles.centralizar}>
             <div className={styles.divform}>
            <img className={styles.imgCadastro} src={logo} alt=""></img>
        <form className={styles.form}>
        <div className={styles.inputConteiner}>
                <label className={styles.label} htmlFor="email">Nome</label>
                <input className={styles.input1} type="text" name="email" id="nome" placeholder="Digite seu nome">
                </input>
            </div>
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
            <div className={styles.inputConteiner}>
                <label className={styles.label} htmlFor="password">Confirme a senha</label>
                <input className={styles.input2} type="password" name="password" id="comfirmassword" placeholder="*******">
                </input>
            </div>
            <div className={styles.inputbotao}>
                <button className={styles.button} >Cadastro</button>
            </div>
            <Link to="/Cadastro" className={styles.linkCadastro}>Cadastre aqui</Link>
        </form>
        </div>
             </div>
        </div>
    )
}

export default Cadastro;