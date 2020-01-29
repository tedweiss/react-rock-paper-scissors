import React from 'react'

import { useEnemyState } from '../providers/EnemyProvider'

import EnemiesDisplay from './EnemiesDisplay'
import Battlefield from './Battlefield'

const Pages = () => {
  const { enemy } = useEnemyState()

  if (enemy && enemy.id) {
    return <Battlefield />
  }
  return (
    <>
      <EnemiesDisplay />
    </>
  )
}

export default Pages
