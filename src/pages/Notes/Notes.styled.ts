import styled from 'styled-components'

interface Props {
  readonly isActive: boolean
}

export const Content = styled.div<Props>`
  height: 100vh;
  background-color: rgb(250, 250, 250);
  opacity: ${(props) => (props.isActive ? 0.4 : 1)};
`

export const WrapperOpacity = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
`
