import React from 'react'
import LoginSide from '../components/LoginPage/LoginSide/LoginSide.js'
import ImageSide from '../components/LoginPage/ImageSide/ImageSide.js'

import './LoginPage.css'


const LoginPage = () => {
  return (
    <div className='LoginPage'>
        <LoginSide className="LoginSide" />
        <ImageSide className="ImageSide"/>
    </div>

  );
}

export default LoginPage;