import React, { createContext, useContext, useReducer } from 'react'
import { hero } from '../utils/hero'
import { updateRewards } from '../utils/utils'

const HeroStateContext = createContext()
const HeroDispatchContext = createContext()

export const heroReducer = (state, action) => {
  switch (action.type) {
    case 'update': {
      const updatedHero = updateRewards(state.hero, action.rewards)
      return { hero: updatedHero }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const HeroProvider = ({ children }) => {
  const [state, dispatch] = useReducer(heroReducer, { hero })
  return (
    <HeroStateContext.Provider value={state}>
      <HeroDispatchContext.Provider value={dispatch}>
        {children}
      </HeroDispatchContext.Provider>
    </HeroStateContext.Provider>
  )
}

const useHeroState = () => {
  const context = useContext(HeroStateContext)
  if (context === undefined) {
    throw new Error('useHeroState must be used within a HeroProvider')
  }
  return context
}

const useHeroDispatch = () => {
  const context = useContext(HeroDispatchContext)
  if (context === undefined) {
    throw new Error('useHeroDispatch must be used within a HeroProvider')
  }
  return context
}

export { HeroProvider, useHeroState, useHeroDispatch }
