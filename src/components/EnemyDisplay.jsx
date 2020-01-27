import React from 'react'

import { useEnemyState } from '../providers/EnemyProvider'

const EnemyDisplay = () => {
  const { enemy } = useEnemyState()
  return <div>{`Chosen Enemy name is ${enemy && enemy.name}`}</div>
}

export default EnemyDisplay
