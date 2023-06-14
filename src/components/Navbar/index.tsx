import { NavLink } from 'react-router-dom'

import { NavbarStyled } from './styles'

export const Navbar: React.FC = () => {
  return (
    <NavbarStyled>
      <NavLink to='/'>
        Tarefas
      </NavLink>
      <NavLink to='notes'>
        Notas
      </NavLink>
      <NavLink to='activities'>
        Atividades
      </NavLink>
      <NavLink to='about'>
        Sobre
      </NavLink>
    </NavbarStyled>
  )
}