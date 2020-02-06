import React from 'react'
import './Settings.css'
import BackToMenu from '../BackToMenu/BackToMenu'
import Snow from '../Snow/Snow'

const Settings = () => {
  return (
    <div className='settings-wrapper'>
      <BackToMenu/>
      <section className="settings">
        <h2>Settings</h2>
        <div>Language: <span>Soon</span></div>
        <div>Snow: <span>Soon</span></div>
        <div>Snow in Game: <span>Soon</span></div>
        <div>Field size: <span>Soon</span></div>
      </section>
      <Snow/>
    </div>
  )
}

export default Settings
