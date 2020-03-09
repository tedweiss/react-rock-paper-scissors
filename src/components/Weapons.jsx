import React from 'react'
import styled from 'styled-components'

import { useCountDispatch } from '../providers/ScoreboardProvider'
import { useEnemyState } from '../providers/EnemyProvider'
import { useHeroState } from '../providers/HeroProvider'
import {
  compare,
  displayBattleStart,
  findEnemysChoice,
  findEnemysItem,
  findHeroWeapons
} from '../utils/utils'

import WeaponGroup from './WeaponGroup'

const StyledWeapons = styled.div`
  display: block;
  width: 700px;
`
const Title = styled.h2`
  font-size: 26px;
  margin: 0;
  border-bottom: 1px solid black;
  padding-bottom: 15px;
  margin-bottom: 20px;
`

const Weapons = ({ setResult, setStart }) => {
  const { selectedEnemy } = useEnemyState()
  const { hero } = useHeroState()
  const dispatch = useCountDispatch()
  const { rocks, paper, scissors } = findHeroWeapons(hero.weapons)
  const startingWords = ['rock', 'paper', 'scissors', 'shoot']

  const displayResult = weaponId => {
    const enemyChoice = findEnemysChoice(Math.random())
    const enemysItem = findEnemysItem(
      Math.random(),
      selectedEnemy.weapons[enemyChoice]
    )
    const winner = compare(weaponId, enemysItem)
    displayBattleStart(startingWords, winner, setResult, setStart, dispatch)
  }

  return (
    <StyledWeapons>
      <Title>Weapons</Title>
      <WeaponGroup
        displayResult={displayResult}
        title='Rocks'
        weapons={rocks}
      />
      <WeaponGroup
        displayResult={displayResult}
        title='Paper'
        weapons={paper}
      />
      <WeaponGroup
        displayResult={displayResult}
        title='Scissors'
        weapons={scissors}
      />
    </StyledWeapons>
  )
}

export default Weapons
