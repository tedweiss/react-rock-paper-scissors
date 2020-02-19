import { compare, findEnemysChoice, updateRewards } from './utils'
import { hero } from './hero'

describe('compare', () => {
  it('should return the item when both choices are the same', () => {
    expect(compare('rock', 'rock').item).toEqual('rock')
  })
  it('should return "tie" when both choices are the same', () => {
    expect(compare('rock', 'rock').winner).toEqual('tie')
  })
  describe('rock is the first choice', () => {
    it('should return "rock" when "rock" and "scissors" are passed in', () => {
      expect(compare('rock', 'scissors').item).toEqual('rock')
    })
    it('should return "hero" when "rock" and "scissors" are passed in', () => {
      expect(compare('rock', 'scissors').winner).toEqual('hero')
    })
    it('should return "paper" when "rock" and "paper" are passed in', () => {
      expect(compare('rock', 'paper').item).toEqual('paper')
    })
    it('should return "enemy" when "rock" and "paper" are passed in', () => {
      expect(compare('rock', 'paper').winner).toEqual('enemy')
    })
  })
  describe('paper is the first choice', () => {
    it('should return "paper" when "paper" and "rock" are passed in', () => {
      expect(compare('paper', 'rock').item).toEqual('paper')
    })
    it('should return "hero" when "paper" and "rock" are passed in', () => {
      expect(compare('paper', 'rock').winner).toEqual('hero')
    })
    it('should return "paper" when "paper" and "scissors" are passed in', () => {
      expect(compare('paper', 'scissors').item).toEqual('scissors')
    })
    it('should return "enemy" when "paper" and "scissors" are passed in', () => {
      expect(compare('paper', 'scissors').winner).toEqual('enemy')
    })
  })
  describe('scrissors is the first choice', () => {
    it('should return "rock" when "scissors" and "rock" are passed in', () => {
      expect(compare('scissors', 'rock').item).toEqual('scissors')
    })
    it('should return "hero" when "scissors" and "rock" are passed in', () => {
      expect(compare('scissors', 'rock').winner).toEqual('hero')
    })
    it('should return "scissors" when "scissors" and "paper" are passed in', () => {
      expect(compare('scissors', 'paper').item).toEqual('rock')
    })
    it('should return "enemy" when "scissors" and "paper" are passed in', () => {
      expect(compare('scissors', 'paper').winner).toEqual('enemy')
    })
  })
})

describe('findEnemysChoice', () => {
  it('should return "rock" for the lower 1/3', () => {
    let choice = 0.23 //Math.random()
    expect(findEnemysChoice(choice)).toEqual('rock')
  })
  it('should return "paper" for the middle 1/3', () => {
    let choice = 0.53 //Math.random()
    expect(findEnemysChoice(choice)).toEqual('paper')
  })
  it('should return "paper" for the middle 1/3', () => {
    let choice = 0.83 //Math.random()
    expect(findEnemysChoice(choice)).toEqual('scissors')
  })
})

describe('updateRewards', () => {
  const rewards = {
    weapons: {
      type: 'rocks',
      id: 'wr2'
    },
    protection: {
      type: 'shield',
      id: 'ps1'
    },
    coins: 1
  }
  const updatedHero = {
    id: 'h1',
    name: 'Hero',
    weapons: {
      rocks: ['wr1', 'wr2'],
    paper: ['wp1'], 
    scissors: ['ws1'] },
    protection: { 
      shield: ['ps1'], 
      helmet: [], 
      armour: [] },
    health: 5,
    coins: 1
  }
  it('should return updated coin reward', () => {
    const updatedCoinsReward = updateRewards(hero, rewards).coins
    expect(updatedCoinsReward).toEqual(updatedHero.coins)
  })
  it('should return updated weapons reward', () => {
    const updatedRockWeapons = updateRewards(hero, rewards).weapons.rocks
    expect(updatedRockWeapons).toEqual(updatedHero.weapons.rocks)
  })
  it('should return updated protection reward', () => {
    const updatedShieldProtection = updateRewards(hero, rewards).protection.shield
    expect(updatedShieldProtection).toEqual(updatedHero.protection.shield)
  })
})
