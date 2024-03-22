import React from 'react';
import styles from './Header.module.css'
import myImage from './logo.jpg'
function header(){
    return(
        <div className={styles.headerBase}>
            <div>
            <div className={styles.imagemLogo}><img src={myImage} alt='Minha imagem'/></div> <h1 >Home</h1><h1 >Conscientizar</h1><h1 >Feira</h1>
           
            </div>
           
        </div>
    )
}
export default header