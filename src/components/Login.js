import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../App.css';
import { useAuth } from '../context/AuthContext';

export const Login = () => {

  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword (e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      history.push('/');
    } catch (error) {
        setError('Revisa tus datos');
        setTimeout(() => setError(''), 1500);
    }
  }


  return (
    <div className='card-pokemon'>
      <div className='card-header-pokemon' >
        {error && <p className='error' >{ error }</p>}
        <h1 className="p-text-pokemon">Inicia Sesión</h1>
      </div>
      <div className='card-body'>
        <form onSubmit={handleSubmit}>
          <input className="input-pokemon" type='email' placeholder='Correo' onChange={handleEmail} />
          <input className="input-pokemon" type='password' placeholder='Contraseña' onChange={handlePassword}/>
          <input className="input-pokemon" type='submit' value='¡Comienza a capturar!' />
        </form>
        <p className="p-text-pokemon">¿Todavía no tienes cuenta? <Link to='/signup'>Regístrate aquí</Link> </p>
      </div>

    </div>
  )
}