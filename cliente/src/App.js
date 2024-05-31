import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Pages/Home'
import Login from './Pages/Login'
import Sobre from './Pages/Sobre'
import logo from './imgs/logo.jpg'
import PontosDescartes from './Pages/PontosDescartes'
import Cadastro from './Pages/Cadastro'

function Navbar() {
  const api = axios.create({
    baseURL: 'http://localhost:5000/api'
  });

  
  const abas = ["Home", "Pontos de Descartes", "Sobre", 'Entrar'];
  const links = ['', 'Descartes', 'Sobre', 'Login']
  const classes = ['botao', 'botao', 'botao1', 'entrar']
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
    
    <div className='App'>
    <Router>
      <Routes>
        <Route exact path='/' element={<><Navbar/><Home/></>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Descartes' element={<><Navbar/><PontosDescartes/></>}/>
        <Route path='/Sobre' element={<><Navbar/><Sobre/></>}/>
        <Route path='/Cadastro' element={<><Navbar/><Cadastro/></>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
