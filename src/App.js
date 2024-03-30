import styles from './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import logo from './imgs/logo.jpg'
import Noticias from './Pages/Noticias'

function App() {
  return (
   <Router>
        <nav className='header'>
        <div className='logodiv'> <img  src={logo} alt='Minha imagem'/> </div>
        <div className='botaodiv'>
         <button className='botao'><Link to="/" className='link'>Home</Link></button>
         <button className='botao'><Link to="/Noticias" className='link'>Noticias</Link></button>

          </div>
          <button className='entrar'><Link to="/SignUp" className='link'>Entrar</Link></button>

          </nav>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/SignUp' element={<Login/>}/>
      <Route path='/Noticias' element={<Noticias/>}/>
    </Routes>
   </Router>


  
  );
}

export default App;
