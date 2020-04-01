import React from 'react'
import styled from 'styled-components'
import { useHeroState, useHeroDispatch } from '../providers/HeroProvider'
import { findHerosItem, subrtractItemCount } from '../utils/utils'

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
  const { hero } = useHeroState()
  const dispatch = useHeroDispatch()
  const heroItem = findHerosItem('weapons', hero, weapon.id, weapon.type)

  return (
    <div>
      <StyledWeapon
        onClick={() => {
          displayResult(weapon.id)
          const updatedHero = subrtractItemCount(
            'weapons',
            hero,
            weapon.id,
            weapon.type
          )
          dispatch({ type: 'update', updatedHero })
        }}
      >
        {weapon.name}
      </StyledWeapon>
      <div>Count: {heroItem.count}</div>
    </div>
  )
}

export default Weapon
