import React from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'

import { useHeroState } from '../providers/HeroProvider'
import MarketItemGroup from './MarketItemGroup'

const StyledMarketTitle = styled.h1`
  font-size: 24px;
  text-transform: uppercase;
`
const StyledMarketGroupTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0;
  text-transform: uppercase;
  text-decoration: underline;
`
const StyledMarketGroups = styled.div`
  display: flex;
  justify-content: space-evenly;
`
const StyledMarketGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Marketplace = () => {
  const { hero } = useHeroState()
  const weapons = ['rocks', 'paper', 'scissors']
  const protections = ['shields', 'helmets', 'armour']
  return (
    <div>
      <StyledMarketTitle>Marketplace</StyledMarketTitle>
      <div>
        <StyledMarketGroupTitle>Coins</StyledMarketGroupTitle>
        <div>{hero.coins}</div>
      </div>
      <StyledMarketGroups>
        <div>
          <StyledMarketGroupTitle>Weapons</StyledMarketGroupTitle>
          <StyledMarketGroup>
            {weapons.map(type => {
              return <MarketItemGroup group='weapons' key={type} type={type} />
            })}
          </StyledMarketGroup>
        </div>
        <div>
          <StyledMarketGroupTitle>Protection</StyledMarketGroupTitle>
          <StyledMarketGroup>
            {protections.map(type => {
              return (
                <MarketItemGroup group='protection' key={type} type={type} />
              )
            })}
          </StyledMarketGroup>
        </div>
      </StyledMarketGroups>
      <button
        onClick={() => {
          navigate('enemies-display')
        }}
      >
        Continue your next Battle
      </button>
    </div>
  )
}

export default Marketplace
