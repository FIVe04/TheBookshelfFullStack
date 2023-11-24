import React from 'react'
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Logo from '../../../assets/logo.svg'
import Login from "./Login/Login"
import Profile from './Profile/Profile';
import './Header.css'
const Header = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      // if (!cookies.token) {
      //   navigate("/login");
      // }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      // return !status ? (removeCookie("token"), navigate("/login")) : {};
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };
  return (
    <div className="Header">
      <img src={Logo} alt="Logo" className="LogoHeader"/>
      {username ? <div onClick={Logout} className='ProfileDiv'><Profile username={username}/></div> : <Login/>}
    </div>
  )
}

export default Header