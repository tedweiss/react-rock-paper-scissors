import React from 'react'
import { useHeroState } from '../providers/HeroProvider'
import MarketItemGroup from './MarketItemGroup'
import { navigate } from '@reach/router'

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
      <button
        onClick={() => {
          navigate('enemies-display')
        }}
      >
        Continue your next Battle
      </button>
    </>
  )
}

export default Marketplace
