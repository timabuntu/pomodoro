import styled, { css } from 'styled-components';

export type Buttontype = 'success' | 'default' | 'danger' | 'warning';

interface ButtonContainerProps {
  colorStyle: Buttontype;
}

const color = {
  success: 'green',
  default: 'gray',
  danger: 'red',
  warning: 'orange',
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  margin: 0 4px;

  ${(props) => {
    return css`
      background-color: ${color[props.colorStyle]};
    `;
  }}
`;
