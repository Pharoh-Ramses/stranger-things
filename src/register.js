<<<<<<< HEAD
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
        
=======
import React, {useState, useEffect} from "react";
import {registerUser} from './api';

const RegisterForm = () => {
  const[username, setUsername] = useState ("");
  const[password, setPassword] = useState ("");
  const[passwordConfirmation, setPasswordConfirmation] = useState ("");

>>>>>>> 3e0c7130b3968a1621a83f7e56ab3322b258c1d4
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
<<<<<<< HEAD
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
=======
      <label htmlFor="passwordConfirmation"reguired>Confirm Password</label>
      <br></br>
      <input onChange={event => setPasswordConfirmation(event.target.value)}required /><br></br>

      <button 
      disabled={password === passwordConfirmation ? false : true}
      type="button" onClick= {event => {
        event.preventDefault();
        registerUser(username,password)
        setUsername("");
        setPassword("");
        setPasswordConfirmation("");
        }}>Register</button>
>>>>>>> 3e0c7130b3968a1621a83f7e56ab3322b258c1d4
    </div>
  );
};

export default RegisterForm;
