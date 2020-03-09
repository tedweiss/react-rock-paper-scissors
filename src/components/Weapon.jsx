import React from 'react'
import styled from 'styled-components'

const StyledWeapon = styled.button`
  padding: 15px 10px;
  border-radius: 4px;
  background-color: blue;
  color: white;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  margin: 10px;
  width: 100%;
  max-width: 225px;
  outline: none;
  cursor: pointer;
`
const Weapon = ({ displayResult, weapon }) => {
  return (
    <StyledWeapon
      onClick={() => {
        displayResult(weapon.id)
      }}
    >
      {weapon.name}
    </StyledWeapon>
  )
}

export default Weapon
