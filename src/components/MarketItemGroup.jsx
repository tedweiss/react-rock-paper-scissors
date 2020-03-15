import React from 'react'
import { useHeroState } from '../providers/HeroProvider'
import MarketItem from './MarketItem'

const MarketItemGroup = ({ group, type }) => {
  const { hero } = useHeroState()
  const heroGroup = hero[group]
  return (
    <div>
      {type}
      {heroGroup[type].map((item, index) => {
        if (item.available) {
          if (group !== 'weapons' || (group === 'weapons' && index !== 0)) {
            return <MarketItem group={group} itemId={item.id} key={item.id} />
          }
        }
        return true
      })}
    </div>
  )
}

export default MarketItemGroup
