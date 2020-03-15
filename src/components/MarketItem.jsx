import React from 'react'

import { items } from '../utils/items'

const MarketItem = ({ group, itemId }) => {
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
      <button>Buy</button>
    </div>
  )
}

export default MarketItem
