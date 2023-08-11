import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../userContext';
import { BASE_URL } from '../backendUrl';


const LoginPage = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);

 async function login(ev){
    ev.preventDefault();
  const response =  await fetch(BASE_URL+'/login',{
      method:'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
      credentials:'include'
    })
    console.log(response);
    if(response.ok){
        response.json().then(userInfo=>{
          setUserInfo(userInfo);
          setRedirect(true);
        })
    }else{
      if(response.status=== 404){
        alert('Invalid User. Please try with valid user information');
      }
      else{ 
        alert('Invalid password. plz check the password')
      }
    }
  }
    if(redirect){
      return <Navigate to ={'/'}/>
    }
   return (
    <div>
        <form className='login' onSubmit={login}>
            <h1>Login Page</h1>
            <input type='text' placeholder='Username' value={username} onChange={ev=>{setUsername(ev.target.value)}}></input>
            <input type='password' placeholder='Password'value={password} onChange={ev=>{setPassword(ev.target.value)}}></input>
            <button>Login</button>
        </form>

    </div>
  )
}

export default LoginPage;