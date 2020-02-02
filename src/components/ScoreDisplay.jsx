import React from 'react'
import styled from 'styled-components'

import { useCountState } from '../providers/ScoreboardProvider'

const StyledCountDisplay = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 25px 0 15px;
  font-size: 18px;
`
const StyledScore = styled.span`
  color: green;
  font-weight: bold;
`

const CountDisplay = () => {
  const { hero, enemy } = useCountState()

  return (
    <StyledCountDisplay>
      <div>
        The Hero's score is <StyledScore>{hero}</StyledScore>
      </div>
      <div>
        The Enemy's score is <StyledScore>{enemy}</StyledScore>
      </div>
    </StyledCountDisplay>
  )
}

export default CountDisplay
