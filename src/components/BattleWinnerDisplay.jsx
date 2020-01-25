import React from 'react'

const BattleWinnerDisplay = ({ battleWinner }) => {
  
  if (battleWinner === 'hero') {
    return <div>Hero wins!</div>
  } else if (battleWinner === 'enemy') {
    return <div>Enemy wins!</div>
  }
}

export default BattleWinnerDisplay
