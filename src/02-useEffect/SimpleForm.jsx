import React, {  useState } from 'react'

import { Message } from './Message';
export const SimpleForm = () => {
  
  const [formState, setFormState] = useState({
    username:'',
    email:''
  })

  const {username, email} = formState;
  
  const onInputChange = ({target}) =>{
    const {name, value} = target;

    setFormState({
        ...formState,
        [name] : value
    })
    
  }

  // useEffect(() => {
  //   console.log('useEffect called!');
  // }, [])
  // useEffect(() => {
  //   console.log('username called!');
  // }, [username])
  // useEffect(() => {
  //   console.log('email called!');
  // }, [email])
  
 


    return (
    <>
    <h3>SimpleForm</h3>
    <hr />
    <input type="text" 
    className='form-control m-1'
    placeholder='Username'
    name='username'
    value={username}
    onChange={onInputChange}
    />

    {
      username ==='pepe' && <Message />
    }
    <input 
    type="email" 
    className='form-control m-1'
    placeholder='youremail@gmail.com'
    name='email'
    value={email}
    onChange={onInputChange}
    />
    </>
  )
}
