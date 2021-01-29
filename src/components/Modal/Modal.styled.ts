import styled from 'styled-components'

interface Props {
  readonly isActive: boolean
}

export const ModalContainer = styled.section<Props>`
  padding: 25px 25px 40px 65px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  display: ${(props) => (props.isActive ? 'block' : 'none')};
`

export const ModalTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: #1f242a;
`
