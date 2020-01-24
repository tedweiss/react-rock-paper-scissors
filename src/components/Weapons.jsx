import React from 'react'
import Weapon from './Weapon'
import { compare, findEnemysChoice } from '../utils/utils'

const Weapons = ({setResult}) => {
  const weaponChoices = ['rock', 'paper', 'scissors']
  const displayResult = name => {
    const enemyChoice = findEnemysChoice(Math.random())
    const winner = compare(name, enemyChoice)
    setResult(winner)
  }
  return (
    <>
      {weaponChoices.map(choice => {
        return (
          <Weapon key={choice} name={choice} displayResult={displayResult} />
        )
      })}
    </>
  )
}

export default Weapons
