import React from 'react'
import './UserBtn.css'

const UserBtn = ({ user, handleClick }) => {
  return (
    <button className={`user-btn ${user && 'authorized'}`} onClick={handleClick}>
      {user ? user : 'Auth'}
    </button>
  )
}

export default UserBtn
