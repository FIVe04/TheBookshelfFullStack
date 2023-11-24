import React from 'react'
import './ImageSide.css'
import ImageForLogin from '../../../assets/image_for_login.png'

const ImageSide = () => {
  return (
    <div className='imageSide'>
        <img src={ImageForLogin} className='imageForLogin'/>
    </div>
  )
}

export default ImageSide