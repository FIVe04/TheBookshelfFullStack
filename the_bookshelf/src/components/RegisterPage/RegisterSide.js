import React from 'react'
import { useState } from 'react';
import Logo from '../../assets/logo.svg';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import './RegisterSide.css'

const RegisterSide = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
      email: "",
      password: "",
      username: "",
    });
    const { email, password, username } = inputValue;
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
        position: "bottom-right",
      });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "http://localhost:4000/signup",
          {
            ...inputValue,
          },
          { withCredentials: true }
        );
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
        username: "",
      });
    };

  return (
    <div className='LoginSide'>
        <img src={Logo} alt="Logo" className="Logo"/>
        <h1 className='textLogin'>Register your acccount</h1>
        <div>

        </div>
        <form onSubmit={handleSubmit} className='formLogin'>
          <div className='usernameBlock'>
              <h1 className='textUsername'>Username</h1>
              <input
              type="text"
              name="username"
              value={username}
              className='usernameField'
              placeholder='user'
              onChange={handleOnChange}
              />
          </div>
          <div className='emailBlock'>
              <h1 className='textUsername'>Email</h1>
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
          <button type="submit" className='loginBtn'>Register</button>
          
        </form>
        <button className='loginGoogleBtn'>Register with your Google Account</button>
          <h1 className='orText'>- OR -</h1>
          <button className='signupBtn' onClick={() => {navigate('/login')}}>Login</button>
        <ToastContainer />
    </div>
  )
}

export default RegisterSide