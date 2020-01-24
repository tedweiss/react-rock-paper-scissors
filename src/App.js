import React from 'react'
import './App.css'
import Battlefield from './components/Battlefield'
import { ScoreboardProvider } from './providers/ScoreboardProvider'

const App = () => {
  return (
    <div className='App' data-testid='App'>
      <ScoreboardProvider>
        <Battlefield />
      </ScoreboardProvider>
    </div>
  )
}

export default App
