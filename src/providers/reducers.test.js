import { countReducer } from './ScoreboardProvider'
import { enemyReducer } from './EnemyProvider'
import { enemies } from '../utils/enemies'
import { heroReducer } from './HeroProvider'
import { hero } from '../utils/hero'

describe('countReducer', () => {
  it('should return the state when the type is "select"', () => {
    expect(
      countReducer(
        { hero: 5, enemy: 5 },
        {
          type: 'select',
          side: 'enemy',
          selectedEnemy: enemies[2]
        }
      )
    ).toEqual({ enemy: 10, hero: 5 })
  })
  it('should return the state when the type is "reset"', () => {
    expect(
      countReducer(
        { battleWinner: 'hero', hero: 0, enemy: 3 },
        { type: 'reset' }
      )
    ).toEqual({
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
  const updatedEnemies = [
    {
      id: 'e1',
      name: 'Enemy One',
      weapons: {
        rocks: ['wr1'],
        paper: ['wp1'],
        scissors: ['ws1']
      },
      protection: {
        shield: null,
        helmet: null,
        armour: null
      },
      health: 5,
      rewards: {
        weapons: {
          type: 'rocks',
          id: 'wr2'
        },
        protection: {
          type: 'shield',
          id: 'ps1'
        },
        coins: 1
      },
      position: 0,
      available: true,
      defeated: true
    },
    {
      id: 'e2',
      name: 'Enemy Two',
      weapons: {
        rocks: ['wr1', 'wr2'],
        paper: ['wp1'],
        scissors: ['ws1']
      },
      protection: {
        shield: 'ps1',
        helmet: null,
        armour: null
      },
      health: 7,
      coins: 2,
      position: 1,
      available: true,
      defeated: false
    },
    {
      id: 'e3',
      name: 'Enemy Three',
      weapons: {
        rocks: ['wr1', 'wr2'],
        paper: ['wp1', 'wp2'],
        scissors: ['ws1']
      },
      protection: {
        shield: 'ps1',
        helmet: 'ph1',
        armour: null
      },
      health: 10,
      coins: 2,
      position: 2,
      available: false,
      defeated: false
    }
  ]
  it('should return the state of a selected enemy', () => {
    expect(
      enemyReducer(
        { enemies, selectedEnemy: enemies[0] },
        {
          type: 'select',
          selectedEnemy: updatedEnemies[1]
        }
      )
    ).toEqual({ enemies, selectedEnemy: updatedEnemies[1] })
  })
  it('should return updated enemies when the hero wins', () => {
    expect(
      enemyReducer(
        { enemies, selectedEnemy: enemies[0] },
        {
          type: 'update',
          winner: 'hero',
          enemy: enemies[0]
        }
      )
    ).toEqual({ enemies: updatedEnemies, selectedEnemy: {} })
  })
  it('should return enemies not updated when the enemy wins', () => {
    expect(
      enemyReducer(
        { enemies, selectedEnemy: enemies[0] },
        {
          type: 'update',
          winner: 'enemy',
          enemy: enemies[0]
        }
      )
    ).toEqual({ enemies, selectedEnemy: {} })
  })
})

xdescribe('heroReducer', () => {
  it('', () => {
    expect(heroReducer(hero, )).toEqual()
  })
})
