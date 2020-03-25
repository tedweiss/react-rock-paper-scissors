import React from 'react'
import styled from 'styled-components'

import { useHeroState } from '../providers/HeroProvider'
import MarketItem from './MarketItem'

export const StyledMarketGroupType = styled.h3`
  text-transform: capitalize;
  margin: 10px;
`

const MarketItemGroup = ({ group, type }) => {
  const { hero } = useHeroState()
  const heroGroup = hero[group]
  return (
    <div>
      <StyledMarketGroupType>{type}</StyledMarketGroupType>
      {heroGroup[type].map((item, index) => {
        if (item.available) {
          if (group !== 'weapons' || (group === 'weapons' && index !== 0)) {
            return (
              <MarketItem
                group={group}
                itemId={item.id}
                key={item.id}
                type={type}
              />
            )
          }
        }
        return true
      })}
    </div>
  )
}

export default MarketItemGroup
