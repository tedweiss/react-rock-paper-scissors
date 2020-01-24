import React from 'react'
import { useCountState } from '../providers/ScoreboardProvider'

const CountDisplay = () => {
  const { hero, enemy } = useCountState()
  return (
    <>
      <div>{`The Hero's score is ${hero}`}</div>
      <div>{`The Enemy's score is ${enemy}`}</div>
    </>
  )
}

export default CountDisplay
