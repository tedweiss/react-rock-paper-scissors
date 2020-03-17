import React from 'react'
import styled from 'styled-components'

import { useEnemyDispatch, useEnemyState } from '../providers/EnemyProvider'
import { useCountDispatch } from '../providers/ScoreboardProvider'
import { useHeroDispatch } from '../providers/HeroProvider'
import RewardDisplay from './RewardsDisplay'
import { navigate } from '@reach/router'

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
  console.log({ selectedEnemy })
  const handleClick = path => {
    dispatch({ type: 'update', winner: battleWinner, enemy: selectedEnemy })
    countDispatch({ type: 'reset' })
    /*battleWinner === 'hero' && */ heroDispatch({
      type: 'update',
      rewards: selectedEnemy.rewards
    })
    navigate(path)
  }
  const winnerName = battleWinner === 'hero' ? 'Hero' : selectedEnemy.name
  const buttonText = battleWinner === 'hero' ? 'Continue' : 'Play Again'

  return (
    <>
      <StyledBattleMessage>
        <StyledWinnerName>{winnerName}</StyledWinnerName> wins!
      </StyledBattleMessage>
      <StyledNext
        onClick={() => {
          handleClick('enemies-display')
        }}
      >
        {buttonText}
      </StyledNext>
      {(battleWinner === 'hero' || selectedEnemy.defeated) && (
        <button
          onClick={() => {
            handleClick('marketplace')
          }}
        >
          Marketplace
        </button>
      )}
      <RewardDisplay />
    </>
  )
}

export default BattleWinnerDisplay
