import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/playgroundManagerActions'
import UserBtn from './UserBtn'

const UserBtnContainer = ({ gameState: { user }, setShowAuthForm, logout }) => {
  const handleClick = () => {
    user
      ? logout()
      : setShowAuthForm(true)
  }

  return <UserBtn user={user} handleClick={handleClick} />
}

const mapStateToProps = state => ({
  gameState: state.gameState,
})

export default connect(mapStateToProps, { logout })(UserBtnContainer)
