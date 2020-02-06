import { countReducer } from './ScoreboardProvider'
import { enemyReducer } from './EnemyProvider'

describe('countReducer', () => {
  it('should return the state when the type is "select"', () => {
    expect(
      countReducer(
        { hero: 5, enemy: 5 },
        {
          type: 'select',
          side: 'enemy',
          enemy: { id: 1, name: 'Enemy One', health: 10 }
        }
      )
    ).toEqual({ enemy: 10, hero: 5 })
  })
  it('should return the state when the type is "reset"', () => {
    expect(countReducer({ hero: 0, enemy: 3 }, { type: 'reset' })).toEqual({
      enemy: 5,
      hero: 5
    })
  })
  it('should return the state when the type is "decrement" and winner is "hero"', () => {
    expect(
      countReducer(
        { hero: 2, enemy: 4 },
        {
          type: 'decrement',
          side: { winner: 'hero' }
        }
      )
    ).toEqual({
      battleWinner: '',
      enemy: 3,
      hero: 2
    })
  })
  it('should return the state when the type is "decrement" and the battle winner is "hero"', () => {
    expect(
      countReducer(
        { hero: 2, enemy: 1 },
        {
          type: 'decrement',
          side: { winner: 'hero' }
        }
      )
    ).toEqual({
      battleWinner: 'hero',
      enemy: 0,
      hero: 2
    })
  })
  it('should return the state when the type is "decrement" and winner is "enemy"', () => {
    expect(
      countReducer(
        { hero: 2, enemy: 4 },
        {
          type: 'decrement',
          side: { winner: 'enemy' }
        }
      )
    ).toEqual({
      battleWinner: '',
      enemy: 4,
      hero: 1
    })
  })
  it('should return the state when the type is "decrement" and the battle winner is "hero"', () => {
    expect(
      countReducer(
        { hero: 1, enemy: 2 },
        {
          type: 'decrement',
          side: { winner: 'enemy' }
        }
      )
    ).toEqual({
      battleWinner: 'enemy',
      enemy: 2,
      hero: 0
    })
  })
  it('should return the state when the type is "decrement" and winner is "tie"', () => {
    expect(
      countReducer(
        { hero: 3, enemy: 2 },
        {
          type: 'decrement',
          side: { winner: 'tie' }
        }
      )
    ).toEqual({
      enemy: 2,
      hero: 3
    })
  })
})

describe('enemyReducer', () => {
  it('should return the state of a selected enemy', () => {
    expect(
      enemyReducer(null, {
        type: 'select',
        enemy: { id: 1, name: 'Enemy One', health: 5 }
      })
    ).toEqual({ enemy: { id: 1, name: 'Enemy One', health: 5 } })
  })
})
