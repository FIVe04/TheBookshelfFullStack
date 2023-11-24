import React from 'react'
import './Profile.css'
import LogoutIcon from '../../../../assets/Logout.svg'

const Profile = (props) => {
  return (
    <div class='profile'>
        <h1 class="greeting">🖐️ Hi, {props.username}! </h1>
        <div className='logoutBtn'>
            <img src={LogoutIcon}/>
        </div>
    </div>
  )
}

export default Profile