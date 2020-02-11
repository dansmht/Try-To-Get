import React from 'react'
import './BestScores.css'
import { connect } from 'react-redux'
import BackToMenu from '../BackToMenu/BackToMenu'
import Snow from '../Snow/Snow'
import UserBtnContainer from '../User/UserBtnContainer'
import AuthForm from '../AuthForm/AuthForm'
import { getBestScoresLanguage } from '../../redux/selectors/languageSelectors'

const BestScores = ({ scores, loading, showAuthForm, setShowAuthForm, setUser, bestScoresLanguage }) => {

  const { menu, title, username, score, size, auth } = bestScoresLanguage

  return (
    <>
      <div className='best-scores-wrapper'>
        <BackToMenu title={menu} />
        <section className='best-scores'>
          <h2>{title}</h2>
          <div className="score-header">
            <span>{username}</span><span>{score}</span><span>{size}</span>
          </div>
          {
            scores
              ? <ol className='score-list'>{scores.map(item => <li key={item.id}>
                <span>{item.user}</span><span>{item.score}</span><span>{item.size}</span>
              </li>)}</ol>
              : loading ? <div className='center'>Loading...</div> : <div className='center'>No records</div>
          }
          <UserBtnContainer setShowAuthForm={setShowAuthForm} title={auth} />
        </section>
        <Snow />
      </div>
      {showAuthForm && <AuthForm setShowAuthForm={setShowAuthForm} setUser={setUser} />}
    </>
  )
}

const mapStateToProps = state => ({
  bestScoresLanguage: getBestScoresLanguage(state),
})

export default connect(mapStateToProps)(BestScores)
