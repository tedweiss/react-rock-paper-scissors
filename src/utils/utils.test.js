import {
  buyItem,
  compare,
  findEnemysChoice,
  findEnemysItem,
  findHeroWeapons,
  findItem,
  findRewards,
  updateRewards,
  findHerosItem,
  subrtractItemCount
} from './utils'
import { hero } from './hero'
import { items } from './items'

describe('compare', () => {
  it('should return the item when both choices are the same', () => {
    expect(compare('wr1', 'wr1').item).toEqual('rocks')
  })
  it('should return "tie" when both choices are the same', () => {
    expect(compare('wr1', 'wr1').winner).toEqual('tie')
  })
  it('should return the heroChoice', () => {
    const heroItem = {
      id: 'wr1',
      name: 'Grain of Sand',
      power: 1,
      price: 1,
      size: 'xs',
      type: 'rocks'
    }
    expect(compare('wr1', 'ws1').heroChoice).toEqual(heroItem)
  })
  it('should return the enemyChoice', () => {
    const enemyItem = {
      id: 'ws1',
      name: 'Safety Scissors',
      power: 1,
      price: 1,
      size: 'sx',
      type: 'scissors'
    }
    expect(compare('wr1', 'ws1').enemyChoice).toEqual(enemyItem)
  })
  describe('rock is the first choice', () => {
    it('should return "rock" when "rock" and "scissors" are passed in', () => {
      expect(compare('wr1', 'ws1').item).toEqual('rock')
    })
    it('should return "hero" when "rock" and "scissors" are passed in', () => {
      expect(compare('wr1', 'ws1').winner).toEqual('hero')
    })
    it('should return "paper" when "rock" and "paper" are passed in', () => {
      expect(compare('wr1', 'wp1').item).toEqual('paper')
    })
    it('should return "enemy" when "rock" and "paper" are passed in', () => {
      expect(compare('wr1', 'wp1').winner).toEqual('enemy')
    })
  })
  describe('paper is the first choice', () => {
    it('should return "paper" when "paper" and "rock" are passed in', () => {
      expect(compare('wp1', 'wr1').item).toEqual('paper')
    })
    it('should return "hero" when "paper" and "rock" are passed in', () => {
      expect(compare('wp1', 'wr1').winner).toEqual('hero')
    })
    it('should return "paper" when "paper" and "scissors" are passed in', () => {
      expect(compare('wp1', 'ws1').item).toEqual('scissors')
    })
    it('should return "enemy" when "paper" and "scissors" are passed in', () => {
      expect(compare('wp1', 'ws1').winner).toEqual('enemy')
    })
  })
  describe('scrissors is the first choice', () => {
    it('should return "rock" when "scissors" and "rock" are passed in', () => {
      expect(compare('ws1', 'wr1').item).toEqual('scissors')
    })
    it('should return "hero" when "scissors" and "rock" are passed in', () => {
      expect(compare('ws1', 'wr1').winner).toEqual('hero')
    })
    it('should return "scissors" when "scissors" and "paper" are passed in', () => {
      expect(compare('ws1', 'wp1').item).toEqual('rock')
    })
    it('should return "enemy" when "scissors" and "paper" are passed in', () => {
      expect(compare('ws1', 'wp1').winner).toEqual('enemy')
    })
  })
})

describe('findEnemysChoice', () => {
  it('should return "rock" for the lower 1/3', () => {
    let choice = 0.23 //Math.random()
    expect(findEnemysChoice(choice)).toEqual('rocks')
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
      type: 'shields',
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
      scissors: ['ws1']
    },
    protection: {
      shields: [
        { id: 'ps1', available: true, selected: false },
        { id: 'ps2', available: false, selected: false },
        { id: 'ps3', available: false, selected: false },
        { id: 'ps4', available: false, selected: false },
        { id: 'ps5', available: false, selected: false }
      ],
      helmets: [
        { id: 'ph1', available: false, selected: false },
        { id: 'ph2', available: false, selected: false },
        { id: 'ph3', available: false, selected: false },
        { id: 'ph4', available: false, selected: false },
        { id: 'ph5', available: false, selected: false }
      ],
      armour: [
        { id: 'pa1', available: false, selected: false },
        { id: 'pa2', available: false, selected: false },
        { id: 'pa3', available: false, selected: false },
        { id: 'pa4', available: false, selected: false },
        { id: 'pa5', available: false, selected: false }
      ]
    },
    health: 5,
    coins: 1
  }
  it('should return updated coin reward', () => {
    const updatedCoinsReward = updateRewards(hero, rewards).coins
    expect(updatedCoinsReward).toEqual(updatedHero.coins)
  })
  it('should return updated weapons reward', () => {
    const updatedRockWeapons = updateRewards(hero, rewards).weapons.rocks[1]
      .available
    expect(updatedRockWeapons).toEqual(true)
  })
  it('should return updated protection reward', () => {
    const updatedShieldProtection = updateRewards(hero, rewards).protection
      .shields[0].available
    expect(updatedShieldProtection).toEqual(true)
  })
})

describe('findRewards', () => {
  const selectedEnemy = {
    id: 'e1',
    name: 'Enemy One',
    weapons: { rocks: ['wr1'], paper: ['wp1'], scissors: ['ws1'] },
    protection: { shield: null, helmet: null, armour: null },
    health: 5,
    rewards: {
      weapons: { type: 'rocks', id: 'wr2' },
      protection: { type: 'shields', id: 'ps1' },
      coins: 1
    },
    position: 0,
    available: true,
    defeated: false
  }
  const { weaponName, protectionName, coins } = findRewards(
    selectedEnemy,
    items
  )
  it('should return the weapon rewarded', () => {
    const rewardsWeapon = weaponName
    expect(rewardsWeapon).toEqual('Pebble')
  })
  it('should return the protection rewarded', () => {
    const rewardsProtection = protectionName
    expect(rewardsProtection).toEqual('Shield 1')
  })
  it('should return the coins rewarded', () => {
    const rewardsCoins = coins
    expect(rewardsCoins).toEqual(1)
  })
})

describe('findHeroWeapons', () => {
  it('should return the weapons that the hero has available and has a count more than 0', () => {
    const heroWeapons = findHeroWeapons(hero.weapons)
    const resultHeroWeapons = {
      rocks: [
        {
          id: 'wr1',
          name: 'Grain of Sand',
          power: 1,
          price: 1,
          size: 'xs',
          type: 'rocks'
        }
      ],
      paper: [
        {
          id: 'wp1',
          name: 'Post-It',
          power: 1,
          price: 1,
          size: 'xs',
          type: 'paper'
        }
      ],
      scissors: [
        {
          id: 'ws1',
          name: 'Safety Scissors',
          power: 1,
          price: 1,
          size: 'sx',
          type: 'scissors'
        }
      ]
    }
    expect(heroWeapons).toEqual(resultHeroWeapons)
  })
})

describe('findEnemysItem', () => {
  describe('items length is 5', () => {
    const fiveItems = ['wr1', 'wr2', 'wr3', 'wr4', 'wr5']
    it('returns the first item in the array', () => {
      expect(findEnemysItem(0.1, fiveItems)).toEqual('wr1')
    })
    it('returns the second item in the array', () => {
      expect(findEnemysItem(0.3, fiveItems)).toEqual('wr2')
    })
    it('returns the third item in the array', () => {
      expect(findEnemysItem(0.5, fiveItems)).toEqual('wr3')
    })
    it('returns the fourth item in the array', () => {
      expect(findEnemysItem(0.7, fiveItems)).toEqual('wr4')
    })
    it('returns the first item in the array', () => {
      expect(findEnemysItem(0.9, fiveItems)).toEqual('wr5')
    })
  })
  describe('items length is 4', () => {
    const fourItems = ['wr1', 'wr2', 'wr3', 'wr4']
    it('returns the first item in the array', () => {
      expect(findEnemysItem(0.1, fourItems)).toEqual('wr1')
    })
    it('returns the second item in the array', () => {
      expect(findEnemysItem(0.3, fourItems)).toEqual('wr2')
    })
    it('returns the third item in the array', () => {
      expect(findEnemysItem(0.6, fourItems)).toEqual('wr3')
    })
    it('returns the fourth item in the array', () => {
      expect(findEnemysItem(0.8, fourItems)).toEqual('wr4')
    })
  })
  describe('items length is 3', () => {
    const threeItems = ['wr1', 'wr2', 'wr3']
    it('returns the first item in the array', () => {
      expect(findEnemysItem(0.1, threeItems)).toEqual('wr1')
    })
    it('returns the second item in the array', () => {
      expect(findEnemysItem(0.4, threeItems)).toEqual('wr2')
    })
    it('returns the third item in the array', () => {
      expect(findEnemysItem(0.8, threeItems)).toEqual('wr3')
    })
  })
  describe('items length is 2', () => {
    const twoItems = ['wr1', 'wr2']
    it('returns the first item in the array', () => {
      expect(findEnemysItem(0.1, twoItems)).toEqual('wr1')
    })
    it('returns the second item in the array', () => {
      expect(findEnemysItem(0.7, twoItems)).toEqual('wr2')
    })
  })
  describe('items length is 1', () => {
    const oneItem = ['wr1']
    it('returns the item in the array', () => {
      expect(findEnemysItem(0.1, oneItem)).toEqual('wr1')
    })
  })
})

describe('findItem', () => {
  it('should return the item for which group and id is passed in', () => {
    const foundItem = findItem('weapons', 'wr2')
    const expectedItem = {
      id: 'wr2',
      name: 'Pebble',
      power: 2,
      price: 2,
      size: 'sm',
      type: 'rocks'
    }
    expect(foundItem).toEqual(expectedItem)
  })
})

describe('buyItem', () => {
  it('should return the count increase by 1', () => {
    const mockSetHasNotEnoughCoins = jest.fn()
    const updatedHero = buyItem(
      'weapons',
      hero,
      'wr2',
      mockSetHasNotEnoughCoins,
      'rocks'
    )
    expect(updatedHero.weapons.rocks[1].count).toEqual(1)
  })
  it('should return the coins decreased by the price of the weapon item', () => {
    const mockSetHasNotEnoughCoins = jest.fn()
    const updatedHero = buyItem(
      'weapons',
      { ...hero, coins: 5 },
      'wr2',
      mockSetHasNotEnoughCoins,
      'rocks'
    )
    expect(updatedHero.coins).toEqual(3)
  })
  it('should call setHasNotEnoughCoins when there is not enough coins when a weapon is selected', () => {
    const mockSetHasNotEnoughCoins = jest.fn()
    buyItem(
      'weapons',
      { ...hero, coins: 1 },
      'wr2',
      mockSetHasNotEnoughCoins,
      'rocks'
    )
    expect(mockSetHasNotEnoughCoins).toHaveBeenCalled()
  })
  it('should return the protection type marked as selected', () => {
    const mockSetHasNotEnoughCoins = jest.fn()
    const updatedHero = buyItem(
      'protection',
      hero,
      'ps1',
      mockSetHasNotEnoughCoins,
      'shields'
    )
    expect(updatedHero.protection.shields[0].selected).toEqual(true)
  })
  it('should return the coins decreased by the price of the protection item', () => {
    const mockSetHasNotEnoughCoins = jest.fn()
    const updatedHero = buyItem(
      'protection',
      { ...hero, coins: 5 },
      'ps1',
      mockSetHasNotEnoughCoins,
      'shields'
    )
    expect(updatedHero.coins).toEqual(4)
  })
  it('should call setHasNotEnoughCoins when there is not enough coins when a protection is selected', () => {
    const mockSetHasNotEnoughCoins = jest.fn()
    buyItem(
      'weapons',
      { ...hero, coins: 1 },
      'wr2',
      mockSetHasNotEnoughCoins,
      'rocks'
    )
    expect(mockSetHasNotEnoughCoins).toHaveBeenCalled()
  })
})

describe('findHerosItem', () => {
  const testHero = {
    id: 'h1',
    name: 'Hero',
    weapons: {
      rocks: [
        { id: 'wr1', available: true, count: 999 },
        { id: 'wr2', available: true, count: 5 },
        { id: 'wr3', available: false, count: 0 },
        { id: 'wr4', available: false, count: 0 },
        { id: 'wr5', available: false, count: 0 }
      ],
      paper: [
        { id: 'wp1', available: true, count: 999 },
        { id: 'wp2', available: false, count: 0 },
        { id: 'wp3', available: false, count: 0 },
        { id: 'wp4', available: false, count: 0 },
        { id: 'wp5', available: false, count: 0 }
      ],
      scissors: [
        { id: 'ws1', available: true, count: 999 },
        { id: 'ws2', available: false, count: 0 },
        { id: 'ws3', available: false, count: 0 },
        { id: 'ws4', available: false, count: 0 },
        { id: 'ws5', available: false, count: 0 }
      ]
    },
    protection: {
      shields: [
        { id: 'ps1', available: true, selected: false },
        { id: 'ps2', available: false, selected: false },
        { id: 'ps3', available: false, selected: false },
        { id: 'ps4', available: false, selected: false },
        { id: 'ps5', available: false, selected: false }
      ],
      helmets: [
        { id: 'ph1', available: false, selected: false },
        { id: 'ph2', available: false, selected: false },
        { id: 'ph3', available: false, selected: false },
        { id: 'ph4', available: false, selected: false },
        { id: 'ph5', available: false, selected: false }
      ],
      armour: [
        { id: 'pa1', available: false, selected: false },
        { id: 'pa2', available: false, selected: false },
        { id: 'pa3', available: false, selected: false },
        { id: 'pa4', available: false, selected: false },
        { id: 'pa5', available: false, selected: false }
      ]
    },
    health: 5,
    coins: 0
  }

  it('should return a weapon when weapon info is passed in', () => {
    const group = 'weapons'
    const type = 'rocks'
    const itemId = 'wr2'
    const returnedItem = { id: 'wr2', available: true, count: 5 }
    const heroItem = findHerosItem(group, testHero, itemId, type)
    expect(heroItem).toEqual(returnedItem)
  })
  it('should return a protection item when protection info is passed in', () => {
    const group = 'protection'
    const type = 'shields'
    const itemId = 'ps1'
    const returnedItem = { id: 'ps1', available: true, selected: false }
    const heroItem = findHerosItem(group, testHero, itemId, type)
    expect(heroItem).toEqual(returnedItem)
  })
})

describe('subrtractItemCount', () => {
  it('should return the hero with the count of an item minus 1', () => {
    const testHero = {
      id: 'h1',
      name: 'Hero',
      weapons: {
        rocks: [
          { id: 'wr1', available: true, count: 999 },
          { id: 'wr2', available: true, count: 5 },
          { id: 'wr3', available: false, count: 0 },
          { id: 'wr4', available: false, count: 0 },
          { id: 'wr5', available: false, count: 0 }
        ],
        paper: [
          { id: 'wp1', available: true, count: 999 },
          { id: 'wp2', available: false, count: 0 },
          { id: 'wp3', available: false, count: 0 },
          { id: 'wp4', available: false, count: 0 },
          { id: 'wp5', available: false, count: 0 }
        ],
        scissors: [
          { id: 'ws1', available: true, count: 999 },
          { id: 'ws2', available: false, count: 0 },
          { id: 'ws3', available: false, count: 0 },
          { id: 'ws4', available: false, count: 0 },
          { id: 'ws5', available: false, count: 0 }
        ]
      },
      protection: {
        shields: [
          { id: 'ps1', available: true, selected: false },
          { id: 'ps2', available: false, selected: false },
          { id: 'ps3', available: false, selected: false },
          { id: 'ps4', available: false, selected: false },
          { id: 'ps5', available: false, selected: false }
        ],
        helmets: [
          { id: 'ph1', available: false, selected: false },
          { id: 'ph2', available: false, selected: false },
          { id: 'ph3', available: false, selected: false },
          { id: 'ph4', available: false, selected: false },
          { id: 'ph5', available: false, selected: false }
        ],
        armour: [
          { id: 'pa1', available: false, selected: false },
          { id: 'pa2', available: false, selected: false },
          { id: 'pa3', available: false, selected: false },
          { id: 'pa4', available: false, selected: false },
          { id: 'pa5', available: false, selected: false }
        ]
      },
      health: 5,
      coins: 0
    }
    const updatedHero = subrtractItemCount('weapons', testHero, 'wr2', 'rocks')
    expect(updatedHero.weapons.rocks[1].count).toEqual(4)
  })
})
