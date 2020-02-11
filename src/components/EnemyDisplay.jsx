import React from 'react'

import { useEnemyState } from '../providers/EnemyProvider'

const EnemyDisplay = () => {
  const { selectedEnemy } = useEnemyState()
  return <div>{`Chosen Enemy name is ${selectedEnemy && selectedEnemy.name}`}</div>
}

export default EnemyDisplay
