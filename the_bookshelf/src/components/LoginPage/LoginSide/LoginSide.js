import React from 'react'
import { useState } from 'react';
import Logo from '../../../assets/logo.svg';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import './LoginSide.css'

const LoginSide = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  console.log(inputValue);
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    console.log('click');
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://the-bookshelf-full-stack-api.vercel.app/login",
        {
          ...inputValue,
        },
        { withCredentials: false }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };
  return (
    <div className='LoginSide'>
        <img src={Logo} alt="Logo" className="Logo"/>
        <h1 className='textLogin'>Login into your acccount</h1>
        <div>

        </div>
        <form onSubmit={handleSubmit} className='formLogin'>
          <div className='usernameBlock'>
              <h1 className='textUsername'>Username</h1>
              <input
              type="email"
              name="email"
              value={email}
              className='usernameField'
              placeholder='example@example.com'
              onChange={handleOnChange}
              />
          </div>
          <div className='passwordBlock'>
          <h1 className='textPassword'>Password</h1>
              <input
              name="password"
              value={password}
              type="password"
              className='passwordField'
              placeholder='•••••••••••••••••••••'
              onChange = {handleOnChange}
              />
          </div>
          <button type="submit" className='loginBtn'>Login</button>
          
        </form>
        <button className='loginGoogleBtn'>Login with your Google Account</button>
          <h1 className='orText'>- OR -</h1>
          <button className='signupBtn' onClick={() => {navigate('/register')}} >Sign Up</button>
        <ToastContainer />
    </div>
  )
}

export default LoginSide
