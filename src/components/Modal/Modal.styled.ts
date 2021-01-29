import styled from 'styled-components'

interface Props {
  readonly isActive: boolean
}

export const ModalContainer = styled.section<Props>`
  padding: 25px 55px 40px 55px;
  width: 17%;
  max-width: 470px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  visibility: ${(props) => (props.isActive ? 'visible' : 'hidden')};
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ModalTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  display: flex;
  align-self: center;
  color: #1f242a;
  margin-bottom: 40px;
  margin-top: 5px;
`

export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
  padding-bottom: 12px;
  border-bottom: 1px solid #edeef2;
  margin-bottom: 50px;
`

export const WrapperTextControlButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  align-items: flex-end;
`

export const ButtonRightWrapper = styled.div`
  align-self: flex-end;
  margin-right: -40px;
`
