import React, { useState } from 'react'
import { navigate, Router } from '@reach/router'

import EnemiesDisplay from './EnemiesDisplay'
import Battlefield from './Battlefield'
import Marketplace from './Marketplace'

const Welcome = () => {
  const url = window.location.href
  const urlSplit = url.split('/')
  const path = urlSplit[urlSplit.length - 1]

  const [displayWelcome, setDisplayWelcome] = useState(path === '')
  const handleClick = path => {
    navigate(path)
    path && setDisplayWelcome(false)
  }
  return (
    <>
      {displayWelcome && (
        <div>
          Welcome Hero
          <button onClick={() => handleClick('enemies-display')}>
            Begin Your Journey
          </button>
        </div>
      )}
      <Router>
        <Battlefield path='battlefield' />
        <EnemiesDisplay path='enemies-display' />
        <Marketplace path='marketplace' />
      </Router>
    </>
  )
}

export default Welcome
