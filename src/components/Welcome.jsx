import React, { useState } from 'react'
import { navigate, Router } from '@reach/router'

import EnemiesDisplay from './EnemiesDisplay'
import Battlefield from './Battlefield'
import Marketplace from './Marketplace'

const Welcome = () => {
  const [displayWelcome, setDisplayWelcome] = useState(true)
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
            EnemiesDisplay
          </button>
          <button onClick={() => handleClick('marketplace')}>
            Marketplace
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
