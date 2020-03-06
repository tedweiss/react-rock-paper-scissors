import React from 'react'
import styled from 'styled-components'

import { useCountDispatch } from '../providers/ScoreboardProvider'
import { useEnemyState } from '../providers/EnemyProvider'
import { useHeroState } from '../providers/HeroProvider'
import { items } from '../utils/items'
import {
  compare,
  displayBattleStart,
  findEnemysChoice,
  findEnemysItem,
  findHeroWeapons
} from '../utils/utils'

import Weapon from './Weapon'

const StyledWeapons = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 500px;
`

const Weapons = ({ setResult, setStart }) => {
  const { selectedEnemy } = useEnemyState()
  const { hero } = useHeroState()
  const dispatch = useCountDispatch()
  const weaponChoices = findHeroWeapons(hero.weapons, items.weapons)
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
      {weaponChoices.map(weapon => {
        return (
          <Weapon
            key={weapon.id}
            weapon={weapon}
            displayResult={displayResult}
          />
        )
      })}
    </StyledWeapons>
  )
}

export default Weapons
