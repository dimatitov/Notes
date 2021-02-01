import styled from 'styled-components'

interface Props {
  readonly button?: boolean
}

export const WrapperTop = styled.div<Props>`
  padding: ${(props) => (props.button ? '120px 20px 50px 20px' : '140px 20px 50px 20px')};
  display: flex;
  flex-direction: column;
`

export const ButtonToBack = styled.div`
  margin-bottom: 20px;
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: #333333;
  margin: 0;
`

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
