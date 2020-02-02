import React from 'react'
import styled from 'styled-components'

import { EnemyProvider } from './providers/EnemyProvider'
import { ScoreboardProvider } from './providers/ScoreboardProvider'

import Pages from './components/Pages'

const StyledApp = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 30px auto 0;
`

const App = () => {
  return (
    <div className='App' data-testid='App'>
      <EnemyProvider>
        <ScoreboardProvider>
          <StyledApp>
            <Pages />
          </StyledApp>
        </ScoreboardProvider>
      </EnemyProvider>
    </div>
  )
}

export default App
