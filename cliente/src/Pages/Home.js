import React from 'react';
import styles from '../components/Home.module.css'
import { register } from 'swiper/element/bundle'
import {Swiper, SwiperSlide} from 'swiper/react'    
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import logo from '../imgs/logo.jpg'
register();

function home(){
    const data = [
        {id:'1', Image:'https://img.freepik.com/fotos-gratis/simbolo-de-reciclagem-em-natureza-verde-isolado-em-fundo-branco_125540-3681.jpg?t=st=1711310736~exp=1711314336~hmac=5f82d69e67b9cc2c49c379e16653d0fade23b04bad50a95633568616fd29533e&w=1060'},
        {id:'2', Image:'https://img.freepik.com/vetores-gratis/modelo-de-pagina-inicial-de-reciclagem-plana_23-2148204955.jpg?t=st=1711310743~exp=1711314343~hmac=f6329c8a2f8cda00c39471011af36074cd3fba7304a11875b112b966b4a9e2ba&w=1060'},
        {id:'3', Image:'https://img.freepik.com/vetores-gratis/pessoas-que-classificam-o-lixo-em-ilustracao-de-lixeiras_53876-43173.jpg?t=st=1711310760~exp=1711314360~hmac=10ce633462500edb3a2af1defcda5b6ab2259560c6808750265491810c05b3a6&w=1060'},
        {id:'4', Image:'https://img.freepik.com/fotos-gratis/sacos-de-plastico-com-lixo-na-grama_23-2148523447.jpg?t=st=1711310784~exp=1711314384~hmac=7497eba50196d1a81c61150077fea33ba6bda7a395c42604b390882813fd662a&w=1060'},
    ]
    return(
        <div className={styles.geral}>
            <h1 className={styles.title}>Sobre o programa!</h1>
            <div className={styles.container}>
      
        <Swiper
        effect='fade'
        slidePerView={1}
        pagination={{ clickable :true}}
        navigation   
        
        >
            {data.map( (item) =>(
                 <SwiperSlide key={item.id} className={styles.swiper}>
                    <img src={item.Image}
                    alt='Slider'
                    className={styles.slideitem}/>
                </SwiperSlide> 
                ) )}
        </Swiper>
        </div>        
        
        <div className={styles.cardHome}>
                <div className={styles.h1card}>
                <h1>RECICLAR É UM ATO DE SUSTENTABILIDADE</h1>
                </div>
                <div className={styles.pcard}><p>Transformar é um dos lemas mais importante que carregamos conosco. Ressignificamos materiais descartáveis todos os meses, onde produtos que iriam parar em aterros ou lixões, ganham uma nova forma.</p></div>
                </div>
        
        
        
                <footer className={styles.footer}>
                <div className={styles.divfooter}>
                <img className={styles.imglogo} src={logo} alt=""></img>
                <p className={styles.pfooter}>
                    Reutilizar o hoje é preservar o amanhã!
                    <br/>
                    LIXOZERO 2023 - 2024. Todos os direitos reservados
                    <br/>
                    CNPJ: 18.666.777/0001-69
                </p>
                </div>
                </footer>
        </div>


  
    
    );



}export default home;