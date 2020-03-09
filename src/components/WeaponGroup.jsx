import React from 'react'
import styled from 'styled-components'

import Weapon from './Weapon'

const StyledWeaponGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`
const Title = styled.h3`
  font-size: 24px;
  margin: 0;
`

const WeaponGroup = ({ displayResult, title, weapons }) => {
  return (
    <>
      <Title>{title}</Title>
      <StyledWeaponGroup>
        {weapons.map(weapon => {
          return (
            <Weapon
              key={weapon.id}
              weapon={weapon}
              displayResult={displayResult}
            />
          )
        })}
      </StyledWeaponGroup>
    </>
  )
}

export default WeaponGroup
