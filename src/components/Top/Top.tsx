import React, { ReactNode } from 'react'

import { Wrapper, Title } from './Top.styled'

interface TopContainerProps {
  title: string
  button?: ReactNode
}

const Top: React.FC<TopContainerProps> = ({ title, button }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {button}
    </Wrapper>
  )
}

export default Top
