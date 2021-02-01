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

export const NoteList = styled.div`
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 1.3vw;
  @media (min-width: 1055px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  }
  @media (min-width: 1355px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
  @media (min-width: 1560px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1vw;
  }
`
