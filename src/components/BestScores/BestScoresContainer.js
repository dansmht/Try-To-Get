import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setScoresArr, setUser } from '../../redux/actions/playgroundManagerActions'
import BestScores from './BestScores'

const BestScoresContainer = ({ gameState: { scores, loadingScores }, setScoresArr, setUser }) => {

  const [showAuthForm, setShowAuthForm] = useState(false)

  useEffect(() => {
    setScoresArr()
  }, [setScoresArr])

  return <BestScores scores={scores} setUser={setUser}
                     loading={loadingScores}
                     showAuthForm={showAuthForm}
                     setShowAuthForm={setShowAuthForm} />
}

const mapStateToProps = state => ({
  gameState: state.gameState,
})

export default connect(mapStateToProps, { setScoresArr, setUser })(BestScoresContainer)
