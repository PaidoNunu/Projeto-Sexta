import React from 'react';
import styles from './Header.module.css'
import myImage from './logo.jpg'
function header(){
    return(
        
        <div className={styles.headerBase}>

           <div className={styles.logo}> <img  src={myImage} alt='Minha imagem'/> </div>
           <div className={styles.div_button}>
            <button className={styles.button}><a href="https://www.example.com" className={styles.link}>Home</a></button>
            <button className={styles.button}><a href="https://www.example.com"className={styles.link}>Feira</a></button>
            <button className={styles.button}><a href="https://www.example.com"className={styles.link}>Conscientize-se</a></button>
            </div>
            <div
            className={styles.div_b}><button className={styles.entrar}><a href="#"className={styles.link}>Entrar</a></button>
            </div>           
        </div>
    )
}

export default header