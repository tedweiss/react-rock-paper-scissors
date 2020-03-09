import React, { useState } from 'react'
import styled from 'styled-components'

import { useCountState } from '../providers/ScoreboardProvider'

import Weapons from './Weapons'
import ScoreDisplay from './ScoreDisplay'
import BattleWinnerDisplay from './BattleWinnerDisplay'
import EnemyDisplay from './EnemyDisplay'

const StyledBattlefield = styled.div`
  display: flex;
`

const StyledResult = styled.div`
  margin-top: 10px;
`
const StyledResultWinner = styled.span`
  font-size: 18px;
  text-transform: capitalize;
`
const StyledResultItem = styled(StyledResultWinner)`
  font-weight: bold;
  color: darkorange;
`
const StyledStart = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`

const Battlefield = () => {
  const [result, setResult] = useState()
  const [start, setStart] = useState('')
  const { battleWinner } = useCountState()
  if (result && battleWinner) {
    return <BattleWinnerDisplay battleWinner={battleWinner} />
  }

  return (
    <StyledBattlefield>
      <Weapons setResult={setResult} setStart={setStart} />
      <div>
        <EnemyDisplay />
        <ScoreDisplay />
        <StyledStart>{start}</StyledStart>
        {result && (
          <StyledResult>
            <StyledResultWinner>{result.winner}</StyledResultWinner>{' '}
            <StyledResultItem>{result.item}</StyledResultItem>
          </StyledResult>
        )}
      </div>
    </StyledBattlefield>
  )
}

export default Battlefield
