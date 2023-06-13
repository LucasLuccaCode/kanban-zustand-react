import { styled } from 'styled-components'

export const TaskCardStyled = styled.li`
  border-radius: ${(props) => props.theme.borderRadius.medium};
  padding: 1rem;
  background: rgba(var(--state-color), var(--bg-opacity));
  box-shadow: 0 1px 2px 1px rgba(var(--state-color), var(--box-shadow-opacity));

  i, span {
    color: rgba(var(--state-color), var(--color-opacity));
  }

  h3 {
    font-size: .9rem;
    color: rgba(var(--state-color), var(--title-opacity));
  }
  
  
  &.fixed {
    order: -1;
  }
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
  font-size: 0.7rem;
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
  padding: 0rem 0.3rem;

  &:hover {
    background: rgba(var(--state-color), var(--bg-opacity));

    i {
      color: rgba(var(--state-color), var(--title-opacity));
    }
  }

  &.fixed {
    background: rgba(var(--state-color), var(--bg-opacity));
      
    i {
      color: rgba(var(--state-color), var(--title-opacity)); 
    }
  }

  i {
    font-size: .8rem;
  }
`