import React, { useState } from 'react'
import { UserContext } from './UserContext'

const user1 ={
    id:1,
    username: 'Fiamma',
    email:'fiamma@gmail.com'
}

export const UserProvider = ({children}) => {

const [user, setUser] = useState(user1)

  return (//provee a todos los componentes de este contexto de toda la informacion que pasamos por aca
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}
