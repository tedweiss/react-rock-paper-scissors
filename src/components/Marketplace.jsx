import React from 'react'
import { useHeroState } from '../providers/HeroProvider'
import MarketItemGroup from './MarketItemGroup'

const Marketplace = () => {
  const { hero } = useHeroState()
  const weapons = ['rocks', 'paper', 'scissors']
  const protections = ['shields', 'helmets', 'armour']
  return (
    <>
      <div>
        Coins
        <div>{hero.coins}</div>
      </div>
      <div>
        Weapons
        <div>
          {weapons.map(type => {
            return <MarketItemGroup group='weapons' key={type} type={type} />
          })}
        </div>
      </div>
      <div>
        Protection
        <div>
          {protections.map(type => {
            return <MarketItemGroup group='protection' key={type} type={type} />
          })}
        </div>
      </div>
    </>
  )
}

export default Marketplace
