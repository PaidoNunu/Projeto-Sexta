import React from 'react';
import styles from './Header.module.css'
import myImage from './logo.jpg'
import { Link } from "react-router-dom"
function header(){
    return(
        
        <div className={styles.headerBase}>

           <div className={styles.logo}> <img  src={myImage} alt='Minha imagem'/> </div>
            <button className={styles.button}>  <a href="https://www.example.com" className={styles.link}>Home</a> </button>
            <button className={styles.button} ><a href="https://www.example.com"className={styles.link}>Feira</a></button>
            <button className={styles.button}> <a href="https://www.example.com"className={styles.link}>Conscientize-se</a></button>            
        </div>  
    )
}
export default header