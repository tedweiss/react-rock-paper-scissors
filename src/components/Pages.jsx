import React from 'react'

import { useEnemyState } from '../providers/EnemyProvider'

import EnemiesDisplay from './EnemiesDisplay'
import Battlefield from './Battlefield'
import Marketplace from './Marketplace'

const Pages = () => {
  const { selectedEnemy } = useEnemyState()

  if (selectedEnemy && selectedEnemy.id) {
    return <Battlefield />
  }
  return (
    <>
      <EnemiesDisplay />
      <Marketplace />
    </>
  )
}

export default Pages
