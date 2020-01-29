import React from 'react'
import './App.css'

import { EnemyProvider } from './providers/EnemyProvider'
import { ScoreboardProvider } from './providers/ScoreboardProvider'

import Pages from './components/Pages'

const App = () => {
  return (
    <div className='App' data-testid='App'>
      <EnemyProvider>
        <ScoreboardProvider>
          <Pages />
        </ScoreboardProvider>
      </EnemyProvider>
    </div>
  )
}

export default App
