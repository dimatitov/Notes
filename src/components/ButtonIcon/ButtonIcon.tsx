import React from 'react'

import { Button } from './ButtonIcon.styled'

interface Props {
  icon?: string
  handleClick?: () => void
}

const ButtonIcon: React.FC<Props> = ({ icon, handleClick }) => {
  return (
    <Button onClick={handleClick}>
      <img src={icon} alt="icon" />
    </Button>
  )
}

export default ButtonIcon
