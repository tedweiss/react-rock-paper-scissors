import React from 'react'
import styled from 'styled-components'

import { useCountState } from '../providers/ScoreboardProvider'

const StyledCountDisplay = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  width: 450px;
  margin: 25px 0 15px;
  font-size: 18px;
`
const StyledScoreBox = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledScoreTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`
const StyledScore = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  font-size: 24px;
  width: 30px;
  align-self: center;
  padding: 4px 5px;
  color: green;
  font-weight: bold;
`

const CountDisplay = () => {
  const { hero, enemy } = useCountState()

  return (
    <StyledCountDisplay>
      <StyledScoreBox>
        <StyledScoreTitle>Hero's score</StyledScoreTitle>
        <StyledScore>{hero}</StyledScore>
      </StyledScoreBox>
      <StyledScoreBox>
        <StyledScoreTitle>Enemy's score</StyledScoreTitle>
        <StyledScore>{enemy}</StyledScore>
      </StyledScoreBox>
    </StyledCountDisplay>
  )
}

export default CountDisplay
