import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import styles from './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Sobre from './Pages/Sobre'
import logo from './imgs/logo.jpg'
import PontosDescartes from './Pages/PontosDescartes'


const cores = ["Home", "Pontos de", "azul"];
function Navbar() {
  return (
    <nav className='header'>
      <div className='logodiv'> <img  src={logo} alt='Minha imagem'/> </div>
      <div className='botaodiv'>
        <button className='botao'><Link to="/" className='link'>Home</Link></button>
        <button className='botao'><Link to="/descartes" className='link'>Pontos de Descartes</Link></button>
        <button className='botao'><Link to="/sobre" className='link'>Sobre</Link></button>
      </div>
      <button className='entrar'><Link to="/SignUp" className='link_login'>Entrar</Link></button>
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