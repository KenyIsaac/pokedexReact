import React, { useState } from 'react'
import '../App.css';
import { useAuth } from '../context/AuthContext';

export const Home = () => {

  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      setError('Algo salió mal');
    }
  }

  return (
    <div className='card-pokemon'>
      <div className='card-header-pokemon' >
        {error && <p className='error'>{error}</p>}
        <img src='https://dlprivateserver.com/wp-content/uploads/2020/10/Pok%C3%A9mon-GO-pronto-traer%C3%A1-un-Pok%C3%A9mon-quotcoloridoquot-%C2%BFcu%C3%A1l-podr%C3%ADa-ser.jpg' alt='user' className='user-photo' />
      </div>
      <div className='card-body-pokemon'>
        <h1 className="p-text-pokemon">¡Alto entrenador!</h1>
        <p className="p-text-pokemon">{currentUser.email}</p>
        <button className='logout-button' onClick={handleLogout} >¡Comienza la aventura!</button>
      </div>

    </div>
  )
}