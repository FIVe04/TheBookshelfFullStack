import React from 'react'
import ImageSide from '../components/LoginPage/ImageSide/ImageSide.js'
import RegisterSide from '../components/RegisterPage/RegisterSide.js'
import './RegisterPage.css'


const RegisterPage = () => {
  return (
    <div className='RegisterPage'>
        <RegisterSide className="RegisterSide"/>
        <ImageSide className="ImageSide"/>
    </div>
  )
}

export default RegisterPage