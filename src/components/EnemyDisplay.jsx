import React from 'react'
import styled from 'styled-components'

import { useEnemyState } from '../providers/EnemyProvider'

const StyledEnemyName = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`

const EnemyDisplay = () => {
  const { selectedEnemy } = useEnemyState()
  return (
    <div>
      Chosen Enemy name is{' '}
      <StyledEnemyName>{selectedEnemy.name}</StyledEnemyName>
    </div>
  )
}

export default EnemyDisplay
