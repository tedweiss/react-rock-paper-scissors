import React from 'react'
import styled from 'styled-components'

import { EnemyProvider } from './providers/EnemyProvider'
import { ScoreboardProvider } from './providers/ScoreboardProvider'
import { HeroProvider } from './providers/HeroProvider'
import Welcome from './components/Welcome'

const StyledApp = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: 30px auto 0;
`

const App = () => {
  return (
    <div className='App' data-testid='App'>
      <HeroProvider>
        <EnemyProvider>
          <ScoreboardProvider>
            <StyledApp>
              {/* <Router> */}
              {/* <Pages /> */}
              <Welcome />
              {/* <Battlefield path='battlefield' />
                <EnemiesDisplay path='enemy-display' />
                <Marketplace path='marketplace' />
              </Router> */}
            </StyledApp>
          </ScoreboardProvider>
        </EnemyProvider>
      </HeroProvider>
    </div>
  )
}

export default App
