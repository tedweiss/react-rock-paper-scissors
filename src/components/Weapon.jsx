import React from 'react'
import styled from 'styled-components'

const StyledWeapon = styled.button`
  padding: 25px;
  border-radius: 4px;
  background-color: blue;
  color: white;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  margin: 10px;
  width: 100%;
  outline: none;
  cursor: pointer;
`
const Weapon = ({ displayResult, name }) => {
  return (
    <StyledWeapon
      onClick={() => {
        displayResult(name)
      }}
    >
      {name}
    </StyledWeapon>
  )
}

export default Weapon
