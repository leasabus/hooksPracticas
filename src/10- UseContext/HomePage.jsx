import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const HomePage = () => {

    const {user} = useContext(UserContext)
    console.log(user);

//user? si el user existe entonces plin plin plin se ejecuta, es para que nos e rompa, todo se ve en la consola.
  return (
    <>
    <h3>HomePage</h3>
    <hr />
    <h4>Usuario: {user?.username}</h4> 
    </>
  )
}
