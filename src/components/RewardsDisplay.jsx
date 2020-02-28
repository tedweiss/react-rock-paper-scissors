import React from 'react'
import { useEnemyState } from '../providers/EnemyProvider'
import { items } from '../utils/items'
import { findRewards } from '../utils/utils'

const RewardDisplay = () => {
  const { selectedEnemy } = useEnemyState()
  const { weaponName, protectionName, coins } = findRewards(
    selectedEnemy,
    items
  )

  return (
    <>
      <div>Rewards</div>
      <div>Coins: {coins}</div>
      <div>Weapon: {weaponName}</div>
      <div>Protection: {protectionName}</div>
    </>
  )
}

export default RewardDisplay
