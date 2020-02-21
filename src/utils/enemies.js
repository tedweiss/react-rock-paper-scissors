export const enemies = [
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
        type: 'shields',
        id: 'ps1'
      },
      coins: 1
    },
    position: 0,
    available: true,
    defeated: false
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
    available: false,
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
