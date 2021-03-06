import React from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import { StyledMarketplaceButton } from '../utils/MarketplaceButton'
import { useEnemyDispatch, useEnemyState } from '../providers/EnemyProvider'
import { useCountDispatch } from '../providers/ScoreboardProvider'
import { useHeroState } from '../providers/HeroProvider'

const StyledEnemy = styled.button`
  display: block;
  font-size: 18px;
  padding: 15px 30px;
  border-radius: 4px;
  border: 3px solid red;
  margin: 10px auto;
  outline: none;
  cursor: pointer;
`

const EnemiesDisplay = () => {
  const dispatch = useEnemyDispatch()
  const countDispatch = useCountDispatch()
  const { enemies } = useEnemyState()
  const selectEnemy = enemy => {
    dispatch({ type: 'select', selectedEnemy: enemy })
    countDispatch({ type: 'select', side: 'enemy', selectedEnemy: enemy })
    navigate('battlefield')
  }
  const { hero } = useHeroState()
  console.log({ hero })

  let displayMarketButton
  enemies.map((enemy, index) => {
    if (enemy.available && index > 0) {
      displayMarketButton = true
    }
    return true
  })

  return (
    <div>
      Choose your opponent.
      {enemies.map(enemy => {
        if (enemy.available) {
          return (
            <StyledEnemy key={enemy.name} onClick={() => selectEnemy(enemy)}>
              {enemy.name}
            </StyledEnemy>
          )
        }
        return true
      })}
      {displayMarketButton && (
        <StyledMarketplaceButton
          onClick={() => {
            navigate('marketplace')
          }}
        >
          Marketplace
        </StyledMarketplaceButton>
      )}
    </div>
  )
}

export default EnemiesDisplay
