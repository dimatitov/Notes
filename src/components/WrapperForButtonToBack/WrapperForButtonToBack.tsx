import React from 'react'

import { ButtonFixed } from './WrapperForButtonToBack.styled'

const WrapperForButtonToBack: React.FC = ({ children }) => {
  return <ButtonFixed>{children}</ButtonFixed>
}

export default WrapperForButtonToBack
