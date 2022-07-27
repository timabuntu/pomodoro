import styled from 'styled-components'

export type Buttontype = 'primary' | 'default' | 'secondary' | 'warning'

interface ButtonContainerProps {
  colorStyle: Buttontype
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  margin: 0 4px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme['blue-500']};
  color: ${(props) => props.theme.white};
  font-weight: 700;
  cursor: pointer;
`
