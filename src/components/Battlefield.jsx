import React, { useState } from 'react'
import Weapons from './Weapons'
import ScoreDisplay from './ScoreDisplay'
import { useCountState } from '../providers/ScoreboardProvider'
import BattleWinnerDisplay from './BattleWinnerDisplay'

const Battlefield = () => {
  const [result, setResult] = useState()
  const { battleWinner } = useCountState()

  if (battleWinner) {
    return <BattleWinnerDisplay battleWinner={battleWinner} />
  }

  return (
    <>
      <ScoreDisplay />
      <Weapons setResult={setResult} />
      {result && (
        <div>
          {result.winner} {result.item}
        </div>
      )}
    </>
  )
}

export default Battlefield
