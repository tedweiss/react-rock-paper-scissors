import React from 'react'
import styled from 'styled-components'

import { useCountDispatch } from '../providers/ScoreboardProvider'
import { compare, findEnemysChoice } from '../utils/utils'

import Weapon from './Weapon'

const StyledWeapons = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 500px;
`

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
    <StyledWeapons>
      {weaponChoices.map(choice => {
        return (
          <Weapon key={choice} name={choice} displayResult={displayResult} />
        )
      })}
    </StyledWeapons>
  )
}

export default Weapons
