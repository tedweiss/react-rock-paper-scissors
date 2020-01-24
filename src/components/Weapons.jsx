import React from 'react'
import Weapon from './Weapon'
import { compare, findEnemysChoice } from '../utils/utils'
import { useCountDispatch } from '../providers/ScoreboardProvider'

const Weapons = ({ setResult }) => {
  const weaponChoices = ['rock', 'paper', 'scissors']
  const dispatch = useCountDispatch()
  const displayResult = name => {
    const enemyChoice = findEnemysChoice(Math.random())
    const winner = compare(name, enemyChoice)
    setResult(winner)
    dispatch({ type: 'increment', side: winner })
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
