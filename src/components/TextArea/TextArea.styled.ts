import styled from 'styled-components'

export const TextAreaForm = styled.textarea`
  font-family: 'Roboto', sans-serif;
  background: #f8f8f8;
  border-radius: 25px;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  color: rgba(136, 136, 136, 0.8);
  padding: 16px 8px 16px 16px;
  border: none;
  resize: none;
  height: 100px;
  margin-bottom: 20px;
  &::placeholder {
    color: rgba(136, 136, 136, 0.5);
    font-family: 'Roboto', sans-serif;
  }
`
