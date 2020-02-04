import React from 'react'
import './BestScores.css'
import BackToMenu from '../BackToMenu/BackToMenu'
import Snow from '../Snow/Snow'
import UserBtnContainer from '../User/UserBtnContainer'
import AuthForm from '../AuthForm/AuthForm'

const BestScores = ({ scores, loading, showAuthForm, setShowAuthForm, setUser }) => {
  return (
    <>
      <div className='best-scores-wrapper'>
        <BackToMenu />
        <section className='best-scores'>
          <h2>Best Scores</h2>
          <div className="score-header">
            <span>Username</span><span>Score</span><span>Size</span>
          </div>
          {
            scores
              ? <ol className='score-list'>{scores.map(item => <li key={item.id}>
                <span>{item.user}</span><span>{item.score}</span><span>{item.size}</span>
              </li>)}</ol>
              : loading ? <div className='center'>Loading...</div> : <div className='center'>No records</div>
          }
          <UserBtnContainer setShowAuthForm={setShowAuthForm} />
        </section>
        <Snow />
      </div>
      {showAuthForm && <AuthForm setShowAuthForm={setShowAuthForm} setUser={setUser} />}
    </>
  )
}

export default BestScores
