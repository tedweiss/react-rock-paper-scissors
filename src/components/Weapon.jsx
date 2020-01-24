import React from 'react'

const Weapon = ({ displayResult, name }) => {
  return (
    <div
      onClick={() => {
        displayResult(name)
      }}
    >
      {name}
    </div>
  )
}

export default Weapon
