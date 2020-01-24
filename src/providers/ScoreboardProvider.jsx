import React, { createContext, useContext, useReducer } from 'react'

const ScoreboardStateContext = createContext()
const ScoreboardDispatchContext = createContext()

const countReducer = (state, action) => {
  switch (action.type) {
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
        return { hero: state.hero - 1, enemy: state.enemy }
      } else if (action.side.winner === 'enemy') {
        return { enemy: state.enemy - 1, hero: state.hero }
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
  const [state, dispatch] = useReducer(countReducer, { enemy: 0, hero: 0 })
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
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}

const useCountDispatch = () => {
  const context = useContext(ScoreboardDispatchContext)
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }
  return context
}

export { ScoreboardProvider, useCountState, useCountDispatch }
