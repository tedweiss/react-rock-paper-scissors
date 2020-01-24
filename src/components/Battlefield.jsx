import React, { useState } from 'react'
import Weapons from './Weapons'

const Battlefield = () => {
  const [result, setResult] = useState()
  return (
    <>
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
