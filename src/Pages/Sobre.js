import React from 'react';
import styles from '../components/Sobre.module.css'
import logo from '../imgs/logo.jpg'
function Sobre() {
  return (
    <div className={styles.SobreG}>
      <div className={styles.container}>
        <div className={styles.escrito}>
        <h1 className={styles.h1Sobre}>Um compromisso com a sustentabilidade e o futuro do nosso planeta.</h1>
      <p className={styles.pSobre}>
      LIXO ZERO é uma empresa dedicada à reciclagem e ao manejo responsável de resíduos. Acreditamos que a reciclagem é essencial para a preservação do meio ambiente e para a construção de um futuro mais sustentável para as próximas gerações.
      </p>
      <p className={styles.pSobre}>Promover a reciclagem: Incentivamos e facilitamos a reciclagem de diversos materiais, como papel, plástico, metal, vidro e eletrônicos, em nossa comunidade.<br/>
      Reduzir o impacto ambiental: Através da reciclagem, desviamos o lixo dos aterros sanitários, diminuímos a necessidade de extração de recursos naturais e contribuímos para a mitigação das mudanças climáticas.<br/>
      Educar e conscientizar: Acreditamos que a educação é fundamental para promover a cultura da reciclagem. Por isso, oferecemos workshops, palestras e materiais informativos para conscientizar a população sobre a importância da reciclagem e do consumo consciente.<br/>
      Promover a economia circular: Buscamos integrar a reciclagem em um ciclo virtuoso, onde os materiais reciclados são utilizados para a produção de novos produtos, reduzindo o consumo de recursos virgens e promovendo a sustentabilidade da cadeia produtiva.<br/></p>
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
    </div>
  );
}
export default Sobre;