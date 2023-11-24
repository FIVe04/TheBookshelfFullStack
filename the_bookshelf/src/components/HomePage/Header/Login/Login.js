import React from 'react'
import './Login.css'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="Login">
        <div className="SignUp" onClick={() => {navigate("/register")}}>
          <h1 className = "text_signup">Sign up</h1>
        </div>
        <div className="SignIn" onClick={() =>{navigate("/login")}}>
          <h1 className = "text_signin">Sign in</h1>
        </div>
      </div>
  )
}

export default Login