import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import styles from './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import logo from './imgs/logo.jpg'
import PontosDescartes from './Pages/PontosDescartes'

function Navbar() {
  return (
    <nav className='header'>
      <div className='logodiv'> <img  src={logo} alt='Minha imagem'/> </div>
      <div className='botaodiv'>
        <button className='botao'><Link to="/" className='link'>Home</Link></button>
        <button className='botao'><Link to="/descartes" className='link'>Pontos de Descartes</Link></button>
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
      </Routes>
    </Router>
  );
}

export default App;