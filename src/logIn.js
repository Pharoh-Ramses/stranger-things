import React, { useState } from 'react';
import { loginUser } from "./api";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    loginUser(username, password);
  };


  return (
    <div className="login-box">
      <label htmlFor="username">Username</label>
      <br></br>
      <input onChange={(event) => setUsername(event.target.value)} required />
      <br></br>
      <label htmlFor="password">Password</label>
      <br></br>
      <input onChange={(event) => setPassword(event.target.value)} required />
      <br></br>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
