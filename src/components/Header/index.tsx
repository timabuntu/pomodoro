import { HeaderContainer } from './styles'

import LogoTomato from '../../assets/tomato.png'
import { Scroll, Timer } from 'phosphor-react'
export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoTomato} alt="logotipo tomate" />
      <nav>
        <a href="">
          <Timer size={24} />
        </a>
        <a href="">
          <Scroll size={24} />
        </a>
      </nav>
    </HeaderContainer>
  )
}
