import React, { useState } from 'react';
import { BASE_URL } from '../backendUrl';

const RegisterPage = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  async function register(ev){
    ev.preventDefault();
   
     const response =  await fetch(BASE_URL+'/register',{
      method:'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type' : 'application/json'}
    })
    
    if(response.status === 200){
      alert('Registration Successful');
    }else{
      alert('Registration Failed')
    }
    
  }

  return (
    <div>
        <form className='register' onSubmit={register}>
            <h1>Register Page</h1>
        <input type='text' placeholder='username'
         value={username}
         onChange={ev=>setUsername(ev.target.value)}></input>
        <input type='password'
         placeholder='password'
         value={password}
         onChange={ev=>setPassword(ev.target.value)}
        ></input>
        <button>Register</button>
        </form>
    </div>
  )
}

export default RegisterPage