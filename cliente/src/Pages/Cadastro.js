import React, { useState } from 'react';
import axios from 'axios';
import styles from '../components/Cadastro.module.css'
import logo from '../imgs/lixozero2.png'
import { Link } from 'react-router-dom';
function Cadastro() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);  // Esta linha irá imprimir os dados do formulário no console
    if (form.password !== form.confirmPassword) {
      alert('As senhas não conferem!');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/user', form);
      console.log(response.data);
      alert('Usuário cadastrado com sucesso!');
    } catch (error) {
      console.error(`Erro ao enviar dados: ${error.response}`);
      alert('Houve um erro ao cadastrar o usuário.');
    }
  };

  return (
    <div className={styles.divmae}>
    <div className={styles.centralizar}>
    <div className={styles.divform}>
    <img className={styles.imgCadastro} src={logo} alt=""></img>
    <form  onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="email">Nome</label>
      <input className={styles.input1} type="text" name="name" onChange={handleChange} placeholder="Nome" required />
      <label className={styles.label} htmlFor="email">E-mail</label>
      <input className={styles.input1} type="email" name="email" onChange={handleChange} placeholder="Email" required />
      <label className={styles.label} htmlFor="password">Senha</label>
      <input className={styles.input1} type="password" name="password" onChange={handleChange} placeholder="Senha" required />
      <label className={styles.label} htmlFor="password">Confirme a senha</label>
      <input className={styles.input1} type="password" name="confirmPassword" onChange={handleChange} placeholder="Confirme a senha" required />
      <div className={styles.inputbotao}>
      <button className={styles.button} type="submit">Cadastrar</button>
      </div>
      <Link to="/Login" className={styles.linkCadastro}>Entrar</Link>
    </form>
    </div>
    </div>
    </div>
  );
}export default Cadastro;
