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
