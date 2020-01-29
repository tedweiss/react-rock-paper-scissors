import React, { createContext, useContext, useReducer } from 'react'

const ScoreboardStateContext = createContext()
const ScoreboardDispatchContext = createContext()

const countReducer = (state, action) => {
  switch (action.type) {
    case 'reset': {
      return { hero: 5, enemy: 5 }
    }
    case 'increment': {
      if (action.side.winner === 'hero') {
        return { hero: state.hero + 1, enemy: state.enemy }
      } else if (action.side.winner === 'enemy') {
        return { enemy: state.enemy + 1, hero: state.hero }
      } else if (action.side.winner === 'tie') {
        return { enemy: state.enemy, hero: state.hero }
      }
    }
    case 'decrement': {
      if (action.side.winner === 'hero') {
        const enemyScore = state.enemy - 1
        const battleWinner = enemyScore === 0 ? 'hero' : ''
        return { enemy: enemyScore, hero: state.hero, battleWinner }
      } else if (action.side.winner === 'enemy') {
        const heroScore = state.hero - 1
        const battleWinner = heroScore === 0 ? 'enemy' : ''
        return { hero: heroScore, enemy: state.enemy, battleWinner }
      } else if (action.side.winner === 'tie') {
        return { enemy: state.enemy, hero: state.hero }
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const ScoreboardProvider = ({ children }) => {
  const heroStartingScore = 5
  const enemyStartingScore = 5
  const [state, dispatch] = useReducer(countReducer, {
    enemy: heroStartingScore,
    hero: enemyStartingScore
  })
  return (
    <ScoreboardStateContext.Provider value={state}>
      <ScoreboardDispatchContext.Provider value={dispatch}>
        {children}
      </ScoreboardDispatchContext.Provider>
    </ScoreboardStateContext.Provider>
  )
}

const useCountState = () => {
  const context = useContext(ScoreboardStateContext)
  if (context === undefined) {
    throw new Error('useCountState must be used within a ScoreboardProvider')
  }
  return context
}

const useCountDispatch = () => {
  const context = useContext(ScoreboardDispatchContext)
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a ScoreboardProvider')
  }
  return context
}

export { ScoreboardProvider, useCountState, useCountDispatch }
