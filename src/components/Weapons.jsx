import React from 'react'

import { useCountDispatch } from '../providers/ScoreboardProvider'
import { compare, findEnemysChoice } from '../utils/utils'

import Weapon from './Weapon'

const Weapons = ({ setResult }) => {
  const weaponChoices = ['rock', 'paper', 'scissors']
  const dispatch = useCountDispatch()
  const displayResult = name => {
    const enemyChoice = findEnemysChoice(Math.random())
    const winner = compare(name, enemyChoice)
    setResult(winner)
    dispatch({ type: 'decrement', side: winner })
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
