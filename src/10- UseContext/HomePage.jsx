import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';

export const HomePage = () => {

    const {user} = useContext(UserContext)
    
    const navigate = useNavigate()
    const handleOnClick = () =>{
        navigate('/login')

    }

//user? si el user existe entonces plin plin plin se ejecuta, es para que nos e rompa, todo se ve en la consola.
  return (
    <>
    <h3>HomePage</h3>
    <hr />
    <h4>Usuario: {user?.username}</h4> 
    <button className='btn btn-warning' onClick={handleOnClick}>Ir Login</button>
    </>
  )
}
