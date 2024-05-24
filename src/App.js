import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import styles from './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Sobre from './Pages/Sobre'
import logo from './imgs/logo.jpg'
import PontosDescartes from './Pages/PontosDescartes'


function Navbar() {
  const abas = ["Home", "Pontos de Descartes", "Sobre", 'Entrar'];
  const links = ['', 'descartes', 'Sobre', 'SignUp']
  const classes = ['botao', 'botao', 'botao', 'entrar']
  const classesLink = ['link','link', 'link', 'link_login']
  return (
    <nav className='header'>
      <div className='logodiv'> <img  src={logo} alt='Minha imagem'/> </div>
      <div className='botaodiv'>
          {abas.map((aba, index) => (
          <button key={index} className={`${classes[index]}`}>
            <Link to={`/${links[index]}`} className={`${classesLink[index]}`}>{aba}</Link>
          </button>))}
      </div>
            
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<><Navbar/><Home/></>}/>
        <Route path='/SignUp' element={<Login/>}/>
        <Route path='/descartes' element={<><Navbar/><PontosDescartes/></>}/>
        <Route path='/Sobre' element={<><Navbar/><Sobre/></>}/>
      </Routes>
    </Router>
  );
}

export default App;