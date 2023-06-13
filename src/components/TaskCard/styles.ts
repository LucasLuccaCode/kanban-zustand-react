import { styled } from 'styled-components'

export const TaskCardStyled = styled.li`
  padding: 1rem;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  background: rgba(255, 255, 255, 0.05);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;

  &.fixed {
    order: -1;
  }
`

export const Title = styled.h3`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text.title};
`

export const Footer = styled.div`
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.2rem;
`

export const CreatedAt = styled.span`
  flex: 1;
  margin-right: auto;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.text.placeholder};
`

export const Actions = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Button = styled.button`
  cursor: pointer !important;
  display: flex;
  all: unset;
  border-radius: 0.3rem;
  padding: 0.3rem 0.4rem;
  /* background: red; */

  &:hover {
    background: ${(props) => props.theme.colors.bg.secondary};

    i {
      color: ${(props) => props.theme.colors.text.title};
    }
  }

  &.fixed {
    background: rgba(87, 104, 239, .2);
  }

  i {
    font-size: .9rem;
    color: #aaaab0;
  }
`