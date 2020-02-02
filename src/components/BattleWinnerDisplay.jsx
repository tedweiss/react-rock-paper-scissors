import React from 'react'
import styled from 'styled-components'

import { useEnemyDispatch, useEnemyState } from '../providers/EnemyProvider'
import { useCountDispatch } from '../providers/ScoreboardProvider'

const StyledNext = styled.button`
  display: block;
  font-size: 18px;
  padding: 15px 30px;
  border-radius: 4px;
  border: 3px solid blue;
  margin: 10px auto;
  outline: none;
  cursor: pointer;
`
const StyledBattleMessage = styled.div`
  font-size: 18px;
  font-weight: bold;
`
const StyledWinnerName = styled.span`
  text-transform: uppercase;
`
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
      <StyledBattleMessage>
        <StyledWinnerName>{winnerName}</StyledWinnerName> wins!
      </StyledBattleMessage>
      <StyledNext onClick={handleClick}>Play Again</StyledNext>
    </>
  )
}

export default BattleWinnerDisplay
