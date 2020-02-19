export const findEnemysChoice = choice => {
  let enemysChoice
  if (choice < 0.34) {
    enemysChoice = 'rock'
  } else if (choice <= 0.67) {
    enemysChoice = 'paper'
  } else {
    enemysChoice = 'scissors'
  }
  return enemysChoice
}

export const compare = (choice1, choice2) => {
  let item
  let winner
  if (choice1 === choice2) {
    item = choice1
    winner = 'tie'
  } else if (choice1 === 'rock') {
    if (choice2 === 'scissors') {
      item = 'rock'
      winner = 'hero'
    } else {
      item = 'paper'
      winner = 'enemy'
    }
  } else if (choice1 === 'paper') {
    if (choice2 === 'rock') {
      item = 'paper'
      winner = 'hero'
    } else {
      item = 'scissors'
      winner = 'enemy'
    }
  } else if (choice1 === 'scissors') {
    if (choice2 === 'rock') {
      item = 'scissors'
      winner = 'hero'
    } else {
      item = 'rock'
      winner = 'enemy'
    }
  }
  return { item, winner }
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
  weaponsType.map(weapon => {
    if (weaponsType.indexOf(rewards.weapons.id) < 0) {
      updatedHero.weapons[rewards.weapons.type] = weaponsType.concat(rewards.weapons.id)
    }
    return true
  })
  let protectionType = updatedHero.protection[rewards.protection.type]
  protectionType.map(protection => {
    if (protectionType.indexOf(protection) < 0) {
      protectionType = protectionType.concat(rewards.protection.id)
    }
    return true
  })
  if (protectionType.indexOf(rewards.protection.id) < 0) {
    protectionType = protectionType.push(rewards.protection.id)
  }
  updatedHero.coins = updatedHero.coins + rewards.coins
  console.log('updated reward updatedHero', updatedHero)
  return updatedHero
}
