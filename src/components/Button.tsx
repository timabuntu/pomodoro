import { ButtonContainer, Buttontype } from './Button.styles'

interface ButtonProps {
  colorVariant?: Buttontype
}

export function Button({ colorVariant = 'default' }: ButtonProps) {
  return <ButtonContainer colorStyle={colorVariant}>Enviar</ButtonContainer>
}
