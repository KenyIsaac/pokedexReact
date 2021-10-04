import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


export const SignUp = () => {
  const [error, setError] = useState(null);

  return (
    <div className='card-pokemon'>
      <div className='card-header-pokemon' >
        {error && <p className='error' >{{ error }}</p>}
        <h1 className="p-text-pokemon">Regístrate</h1>
      </div>
      <div className='card-body'>
        <form>
          <input className="input-pokemon" type='email' placeholder='Correo electrónico' />
          <input className="input-pokemon" type='password' placeholder='Contraseña' />
          <input className="input-pokemon" type='password' placeholder='Confirma contraseña' />
          <input className="input-pokemon" type='submit' value='Poke-empieza' />
        </form>
        <p className="p-text-pokemon">¿Ya tienes cuenta? <Link to='/login'>Inicia Sesión</Link> </p>
      </div>

    </div>
  )
}