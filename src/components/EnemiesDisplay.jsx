import React from 'react'

import { useEnemyDispatch } from '../providers/EnemyProvider'
import { enemies } from '../utils/enemies'

const EnemiesDisplay = () => {
  const dispatch = useEnemyDispatch()
  const selectEnemy = enemy => {
    dispatch({ type: 'select', enemy })
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
