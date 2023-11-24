import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Header from '../components/HomePage/Header/Header.js'
import Bestsellers from '../components/HomePage/Bestsellers/Bestsellers.js'
import Search from '../components/HomePage/Search/Search.js'



const HomePage = () => {
  return (
      <div className="App">
          <Header />
          <Bestsellers />
          <Search />
      </div>
  )
}

export default HomePage