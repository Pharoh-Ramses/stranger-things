import React, { useState, useEffect } from 'react';
import { registerUser } from './api';

const RegisterForm = () => {
        const[username, setUsername] = useState("");
        const[password, setPassword] = useState("");
        const[passwordConfirmation, setpasswordConfirmation] = useState("");
        const[token, setToken] = useState("");

useEffect(()=>{
  localStorage.getItem('data.token');
})
        
  return (
    <div>
      <label htmlFor="username">Username</label>
      <br></br>
      <input onChange={event => setUsername(event.target.value)}required />
      <br></br>
      <label htmlFor="password">Password</label>
      <br></br>
      <input onChange={event => setPassword(event.target.value)}required />
      <br></br>
      <label htmlFor="passwordConfirmation">Confirm Password</label>
      <br></br>
      <input onChange={event => setpasswordConfirmation(event.target.value)}required />
      <br></br>
      <button 
        disabled={password === passwordConfirmation ? false : true}
        type="button" onClick= { event => {
                event.preventDefault();
                registerUser(username,password)
                setUsername("");
                setPassword("");
                setpasswordConfirmation("");
                }}> Register </button>
    </div>
  );
};

export default RegisterForm;
