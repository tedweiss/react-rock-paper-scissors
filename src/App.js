import React from 'react'
import './App.css'

import { EnemyProvider } from './providers/EnemyProvider'
import { ScoreboardProvider } from './providers/ScoreboardProvider'

import Battlefield from './components/Battlefield'
import EnemiesDisplay from './components/EnemiesDisplay'

const App = () => {
  return (
    <div className='App' data-testid='App'>
      <EnemyProvider>
        <ScoreboardProvider>
          <EnemiesDisplay />
          <Battlefield />
        </ScoreboardProvider>
      </EnemyProvider>
    </div>
  )
}

export default App
