import React from 'react'
import { useEnemyDispatch, useEnemyState } from '../providers/EnemyProvider'
import { useCountDispatch } from '../providers/ScoreboardProvider'

const BattleWinnerDisplay = ({ battleWinner }) => {
  const dispatch = useEnemyDispatch()
  const countDispatch = useCountDispatch()
  const { enemy } = useEnemyState()
  const handleClick = () => {
    const resetEnemy = {
      id: null,
      name: '',
      health: null
    }
    dispatch({ type: 'select', enemy: resetEnemy })
    countDispatch({ type: 'reset' })
  }
  const winnerName = battleWinner === 'hero' ? 'Hero' : enemy.name
  return (
    <>
      <div>{winnerName} wins!</div>
      <div onClick={handleClick}>Play Again</div>
    </>
  )
}

export default BattleWinnerDisplay
