import React, { useState } from 'react'
import Weapons from './Weapons'
import ScoreDisplay from './ScoreDisplay'

const Battlefield = () => {
  const [result, setResult] = useState()
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
