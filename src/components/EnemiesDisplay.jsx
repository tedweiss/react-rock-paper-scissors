import React from 'react'
import styled from 'styled-components'

import { useEnemyDispatch } from '../providers/EnemyProvider'
import { enemies } from '../utils/enemies'
import { useCountDispatch } from '../providers/ScoreboardProvider'

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
  const selectEnemy = enemy => {
    dispatch({ type: 'select', enemy })
    countDispatch({ type: 'select', side: 'enemy', enemy })
  }

  return enemies.map(enemy => {
    return (
      <StyledEnemy key={enemy.name} onClick={() => selectEnemy(enemy)}>
        {enemy.name}
      </StyledEnemy>
    )
  })
}

export default EnemiesDisplay
