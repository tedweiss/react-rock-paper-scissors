import React, { useState } from 'react'

import { useCountState } from '../providers/ScoreboardProvider'

import Weapons from './Weapons'
import ScoreDisplay from './ScoreDisplay'
import BattleWinnerDisplay from './BattleWinnerDisplay'
import EnemyDisplay from './EnemyDisplay'

const Battlefield = () => {
  const [result, setResult] = useState()
  const { battleWinner } = useCountState()

  if (battleWinner) {
    return <BattleWinnerDisplay battleWinner={battleWinner} />
  }

  return (
    <>
      <ScoreDisplay />
      <EnemyDisplay />
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
