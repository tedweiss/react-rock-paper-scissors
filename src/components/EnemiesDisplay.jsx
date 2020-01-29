import React from 'react'

import { useEnemyDispatch } from '../providers/EnemyProvider'
import { enemies } from '../utils/enemies'
import { useCountDispatch } from '../providers/ScoreboardProvider'

const EnemiesDisplay = () => {
  const dispatch = useEnemyDispatch()
  const countDispatch = useCountDispatch()
  const selectEnemy = enemy => {
    dispatch({ type: 'select', enemy })
    countDispatch({ type: 'select', side: 'enemy', enemy })
  }

  return enemies.map(enemy => {
    return (
      <div key={enemy.name} onClick={() => selectEnemy(enemy)}>
        {enemy.name}
      </div>
    )
  })
}

export default EnemiesDisplay
