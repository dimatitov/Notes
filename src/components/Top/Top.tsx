import React, { ReactNode } from 'react'

import { WrapperTop, Title, FlexWrapper, ButtonToBack } from './Top.styled'

interface TopContainerProps {
  title: string
  button?: ReactNode
  buttonIcon?: ReactNode
  buttonToBack: boolean
}

const Top: React.FC<TopContainerProps> = ({ title, button, buttonIcon, buttonToBack }) => {
  return (
    <WrapperTop button={buttonToBack}>
      <ButtonToBack>{buttonIcon}</ButtonToBack>
      <FlexWrapper>
        <Title>{title}</Title>
        {button}
      </FlexWrapper>
    </WrapperTop>
  )
}

export default Top
