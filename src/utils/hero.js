export const hero = {
  id: 'h1',
  name: 'Hero',
  weapons: {
    rocks: [
      { id: 'wr1', available: true, count: 999 },
      { id: 'wr2', available: false, count: 0 },
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
      { id: 'ps1', available: false, selected: false },
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
