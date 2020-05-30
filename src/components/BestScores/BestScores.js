import React from 'react'
import './BestScores.css'
import { connect } from 'react-redux'
import BackToMenu from '../BackToMenu/BackToMenu'
import Snow from '../Snow/Snow'
import { getBestScoresLanguage } from '../../redux/selectors/languageSelectors'
import { getSnow } from '../../redux/selectors/settingsSelectors'

const BestScores = ({ scores, loading, bestScoresLanguage, isSnow }) => {

  const { menu, title, username, score, size } = bestScoresLanguage

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
        </section>
        {isSnow === 'True' && <Snow />}
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  bestScoresLanguage: getBestScoresLanguage(state),
  isSnow: getSnow(state),
})

export default connect(mapStateToProps)(BestScores)
