import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios"


function Login (){
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const [state,dispatch] = useContext(AuthContext)
  return (
    <div>
      <input data-cy="login-email" 
        placeholder="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
      />
      <input data-cy="login-password" 
          placeholder="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
      />
      <button data-cy="login-submit"
        type  ="submit"
      >Submit</button>
    </div>
  );
};

export default Login;
