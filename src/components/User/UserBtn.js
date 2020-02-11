import React from 'react'
import './UserBtn.css'

const UserBtn = ({ user, handleClick, title }) => {
  return (
    <button className={`user-btn ${user ? 'authorized' : ''}`} onClick={handleClick}>
      {user ? user : title}
    </button>
  )
}

export default UserBtn
