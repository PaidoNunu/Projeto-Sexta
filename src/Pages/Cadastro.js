import React, { useState } from 'react';
import axios from 'axios';

function Cadastro() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3000/cadastro', form);
    console.log(response.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" onChange={handleChange} placeholder="Nome" required />
      <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
      <input type="password" name="password" onChange={handleChange} placeholder="Senha" required />
      <input type="password" name="confirmPassword" onChange={handleChange} placeholder="Confirme a senha" required />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Cadastro;
