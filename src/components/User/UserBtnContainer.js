import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/playgroundManagerActions'
import UserBtn from './UserBtn'

const UserBtnContainer = ({ gameState: { user }, setShowAuthForm, logout, title }) => {
  const handleClick = () => {
    user
      ? logout()
      : setShowAuthForm(true)
  }

  return <UserBtn user={user} handleClick={handleClick} title={title} />
}

const mapStateToProps = state => ({
  gameState: state.gameState,
})

export default connect(mapStateToProps, { logout })(UserBtnContainer)
