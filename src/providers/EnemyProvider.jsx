import React, { createContext, useContext, useReducer } from 'react'

const EnemyStateContext = createContext()
const EnemyDispatchContext = createContext()

export const enemyReducer = (_state, action) => {
  switch (action.type) {
    case 'select': {
      return { enemy: action.enemy }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const EnemyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(enemyReducer, {
    id: null,
    name: '',
    health: null
  })
  return (
    <EnemyStateContext.Provider value={state}>
      <EnemyDispatchContext.Provider value={dispatch}>
        {children}
      </EnemyDispatchContext.Provider>
    </EnemyStateContext.Provider>
  )
}

const useEnemyState = () => {
  const context = useContext(EnemyStateContext)
  if (context === undefined) {
    throw new Error('useEnemyState must be used within a EnemyProvider')
  }
  return context
}

const useEnemyDispatch = () => {
  const context = useContext(EnemyDispatchContext)
  if (context === undefined) {
    throw new Error('useEnemyDispatch must be used within a EnemyProvider')
  }
  return context
}

export { EnemyProvider, useEnemyState, useEnemyDispatch }
