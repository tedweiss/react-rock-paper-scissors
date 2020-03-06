import { items } from './items'

export const findEnemysChoice = choice => {
  let enemysChoice
  if (choice < 0.34) {
    enemysChoice = 'rocks'
  } else if (choice <= 0.67) {
    enemysChoice = 'paper'
  } else {
    enemysChoice = 'scissors'
  }
  return enemysChoice
}

export const findHeroWeapons = weapons => {
  let heroWeapons = []
  items.weapons.map(item => {
    weapons.rocks.map(rock => {
      if (rock.id === item.id && rock.available && rock.count > 0) {
        heroWeapons.push(item)
      }
      return true
    })
    weapons.paper.map(paperItem => {
      if (
        paperItem.id === item.id &&
        paperItem.available &&
        paperItem.count > 0
      ) {
        heroWeapons.push(item)
      }
      return true
    })
    weapons.scissors.map(scissorsItem => {
      if (
        scissorsItem.id === item.id &&
        scissorsItem.available &&
        scissorsItem.count > 0
      ) {
        heroWeapons.push(item)
      }
      return true
    })
    return true
  })
  return heroWeapons
}

export const findEnemysItem = (randomNumber, items) => {
  let enemyItem
  switch (items.length) {
    case 5:
      if (randomNumber <= 0.2) {
        enemyItem = items[0]
      } else if (randomNumber <= 0.4) {
        enemyItem = items[1]
      } else if (randomNumber <= 0.6) {
        enemyItem = items[2]
      } else if (randomNumber <= 0.8) {
        enemyItem = items[3]
      } else {
        enemyItem = items[4]
      }
      break
    case 4:
      if (randomNumber <= 0.25) {
        enemyItem = items[0]
      } else if (randomNumber <= 0.5) {
        enemyItem = items[1]
      } else if (randomNumber <= 0.75) {
        enemyItem = items[2]
      } else {
        enemyItem = items[3]
      }
      break
    case 3:
      if (randomNumber <= 0.34) {
        enemyItem = items[0]
      } else if (randomNumber <= 0.67) {
        enemyItem = items[1]
      } else {
        enemyItem = items[2]
      }
      break
    case 2:
      if (randomNumber <= 0.5) {
        enemyItem = items[0]
      } else {
        enemyItem = items[1]
      }
      break
    default:
      enemyItem = items[0]
      break
  }
  return enemyItem
}

export const compare = (choice1, choice2) => {
  let heroChoice
  let enemyChoice
  items.weapons.map(weapon => {
    if (weapon.id === choice1) {
      heroChoice = weapon
    }
    if (weapon.id === choice2) {
      enemyChoice = weapon
    }
    return true
  })
  let item
  let winner
  if (heroChoice.type === enemyChoice.type) {
    item = heroChoice.type
    winner = 'tie'
  } else if (heroChoice.type === 'rocks') {
    if (enemyChoice.type === 'scissors') {
      item = 'rock'
      winner = 'hero'
    } else {
      item = 'paper'
      winner = 'enemy'
    }
  } else if (heroChoice.type === 'paper') {
    if (enemyChoice.type === 'rocks') {
      item = 'paper'
      winner = 'hero'
    } else {
      item = 'scissors'
      winner = 'enemy'
    }
  } else if (heroChoice.type === 'scissors') {
    if (enemyChoice.type === 'rocks') {
      item = 'scissors'
      winner = 'hero'
    } else {
      item = 'rock'
      winner = 'enemy'
    }
  }
  return { item, winner, heroChoice, enemyChoice }
}

export const displayBattleStart = (
  startingWords,
  winner,
  setResult,
  setStart,
  dispatch
) => {
  setResult(null)
  startingWords.map((word, index) => {
    if (startingWords.indexOf(word) <= startingWords.length - 1) {
      setTimeout(() => {
        setStart(word + ' ')
      }, 750 * index)
    }
    if (startingWords.indexOf(word) === startingWords.length - 1) {
      setTimeout(() => {
        setStart('')
        setResult(winner)
        dispatch({ type: 'decrement', side: winner })
      }, 750 * index + 750)
    }
    return true
  })
}

export const updateRewards = (hero, rewards) => {
  let updatedHero = hero

  let weaponsType = updatedHero.weapons[rewards.weapons.type]
  weaponsType.map((weapon, index) => {
    if (weapon.id === rewards.weapons.id) {
      updatedHero.weapons[rewards.weapons.type][index].available = true
    }
    return true
  })
  let protectionType = updatedHero.protection[rewards.protection.type]
  const updatedProtection = protectionType.map(protection => {
    if (protection.id === rewards.protection.id) {
      protection.available = true
    }
    return protection
  })
  updatedHero.protection[rewards.protection.type] = updatedProtection

  updatedHero.coins = updatedHero.coins + rewards.coins
  return updatedHero
}

export const findRewards = (selectedEnemy, items) => {
  let weaponName
  items.weapons.map(weapon => {
    if (weapon.id === selectedEnemy.rewards.weapons.id) {
      weaponName = weapon.name
    }
    return true
  })

  let protectionName
  items.protection.map(protection => {
    if (protection.id === selectedEnemy.rewards.protection.id) {
      protectionName = protection.name
    }
    return true
  })
  return { weaponName, protectionName, coins: selectedEnemy.rewards.coins }
}
