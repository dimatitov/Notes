import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'

interface Props {
  readonly isEdit: boolean
}

export const Content = styled.div`
  height: 100vh;
  background-color: rgb(250, 250, 250);
`

export const NoteContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`

export const NoteText = styled(TextareaAutosize)<Props>`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 120%;
  align-self: flex-start;
  color: #70758f;
  background-color: #fff;
  border: ${(props) => (props.isEdit ? '1px solid #a1a4b5' : '1px solid #fff')};
  text-align: left;
  width: 100%;
  margin-bottom: 30px;
  resize: none;
`

export const NoteBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
  border-bottom: 1px solid #edeef2;
`

export const NoteDate = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 110%;
  color: #a1a4b5;
`
