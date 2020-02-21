export const hero = {
  id: 'h1',
  name: 'Hero',
  weapons: {
    rocks: ['wr1'],
    paper: ['wp1'],
    scissors: ['ws1']
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
