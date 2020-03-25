import React, { useState } from 'react'
import styled from 'styled-components'

import { hero } from '../utils/hero'
import { items } from '../utils/items'
import { buyItem, findHerosItem } from '../utils/utils'
import { useHeroDispatch } from '../providers/HeroProvider'

const StyledErrorMessage = styled.div`
  color: red;
`

const MarketItem = ({ group, itemId, type }) => {
  const [hasNotEnoughCoins, setHasNotEnoughCoins] = useState()
  const dispatch = useHeroDispatch()
  const count = findHerosItem(group, hero, itemId, type).count

  const handleClick = () => {
    const updatedHero = buyItem(group, hero, itemId, setHasNotEnoughCoins, type)
    dispatch({
      type: 'update',
      updatedHero
    })
  }
  let marketItem

  items[group].map(item => {
    if (itemId === item.id) {
      marketItem = item
    }
    return true
  })

  const { name, price, power } = marketItem
  const priceLabel = price === 1 ? 'coin' : 'coins'

  return (
    <div>
      <div>{name}</div>
      <div>Power: {power}</div>
      <div>
        Price: {price} {priceLabel}
      </div>
      {count >= 0 && <div>Currently own: {count}</div>}
      {hasNotEnoughCoins && (
        <StyledErrorMessage>You don't have enough coins</StyledErrorMessage>
      )}
      <button onClick={handleClick}>Buy</button>
    </div>
  )
}

export default MarketItem
