import styled from 'styled-components'
import arrowRight from '../../assets/img/right_arrow.png'
import { Link } from '@reach/router'

export const NoteComponent = styled(Link)`
  min-height: 110px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgb(0 0 0 / 6%);
  padding: 0 20px;
  position: relative;
  display: grid;
  grid-template-rows: minmax(20px, 50px) 1fr;
  row-gap: 20px;
  text-decoration: none;
  @media (max-width: 1042px) {
    min-height: 120px;
    row-gap: 25px;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.05);
    &:before {
      content: url(${arrowRight});
      position: absolute;
      width: 20px;
      height: 20px;
      bottom: 15px;
      right: 16px;
    }
  }
`

export const NoteTitle = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 120%;
  color: #1f242a;
  overflow-wrap: anywhere;
`

export const Date = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 110%;
  color: #a1a4b5;
`
