import React, { createContext, useContext, useReducer } from 'react'
import { enemies } from '../utils/enemies'

const EnemyStateContext = createContext()
const EnemyDispatchContext = createContext()

export const enemyReducer = (state, action) => {
  switch (action.type) {
    case 'select': {
      const enemies = (state && state.enemies) || []
      const selectedEnemy = action.selectedEnemy || (state && state.selectedEnemy)
      return { enemies, selectedEnemy }
    }
    case 'update': {
      const updatedEnemies = state.enemies.map(enemy => {
        if (action.winner === 'hero') {
          if (enemy.id === action.enemy.id && !action.enemy.defeated) {
            return { ...enemy, defeated: true }
          }
          if (
            !action.enemy.defeated &&
            enemy.position === action.enemy.position + 1
          ) {
            return { ...enemy, available: true }
          }
          return enemy
        } else {
          return enemy
        }
      })
      return { selectedEnemy: {}, enemies: updatedEnemies }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const EnemyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(enemyReducer, {
    enemies,
    selectedEnemy: {}
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
