import React from 'react'
import styled from 'styled-components'

import { useEnemyDispatch, useEnemyState } from '../providers/EnemyProvider'
import { useCountDispatch } from '../providers/ScoreboardProvider'
import { useHeroDispatch } from '../providers/HeroProvider'
import RewardDisplay from './RewardsDisplay'

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
  const heroDispatch = useHeroDispatch()
  const { selectedEnemy } = useEnemyState()
  const handleClick = () => {
    dispatch({ type: 'update', winner: battleWinner, enemy: selectedEnemy })
    countDispatch({ type: 'reset' })
    /*battleWinner === 'hero' && */ heroDispatch({
      type: 'update',
      rewards: selectedEnemy.rewards
    })
  }
  const winnerName = battleWinner === 'hero' ? 'Hero' : selectedEnemy.name
  return (
    <>
      <StyledBattleMessage>
        <StyledWinnerName>{winnerName}</StyledWinnerName> wins!
      </StyledBattleMessage>
      <StyledNext onClick={handleClick}>Play Again</StyledNext>
      <RewardDisplay />
    </>
  )
}

export default BattleWinnerDisplay
