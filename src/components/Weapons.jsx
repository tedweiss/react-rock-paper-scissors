import React from 'react'
import styled from 'styled-components'

import { useCountDispatch } from '../providers/ScoreboardProvider'
import { compare, displayBattleStart, findEnemysChoice } from '../utils/utils'

import Weapon from './Weapon'

const StyledWeapons = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 500px;
`

const Weapons = ({ setResult, setStart }) => {
  const weaponChoices = ['rock', 'paper', 'scissors']
  const startingWords = ['rock', 'paper', 'scissors', 'shoot']
  const dispatch = useCountDispatch()
  const displayResult = name => {
    const enemyChoice = findEnemysChoice(Math.random())
    const winner = compare(name, enemyChoice)
    displayBattleStart(startingWords, winner, setResult, setStart, dispatch)
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
