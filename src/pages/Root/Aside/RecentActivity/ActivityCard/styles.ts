import { styled } from 'styled-components';

export const ActivityCardStyled = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: .5rem 0;
  padding-right: .5rem;
  margin-left: .7rem;

  &::before, 
  &::after {
    content: "";
    position: absolute;
    left: -2px;
    width: 2px;
    height: 50%;
    background: rgba(var(--done-state-color), .3);
    z-index: 0;
  }

  &::before {
    top: 0;
  }

  &::after {
    top: 50%;
  }

  &:first-child {
    padding-top: 0;
  }

  &:first-child::before,
  &:last-child::after {
    background: none;
  }
`

export const Icon = styled.div`
  display: grid;
  transform: translateX(-50%);
  place-content: center;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50px;
  border: 2px solid rgba(var(--done-state-color), .4);
  background: ${props => props.theme.colors.bg.secondary};
  z-index: 1;

  i {
    font-size: .5rem;
    margin-top: 1px;
    color: rgba(var(--done-state-color), .6);
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* gap: .4rem; */

  p {
    font-weight: bold;
    font-size: .7rem;
    color: rgba(var(--done-state-color), 1);
  }

  span {
    font-size: .6rem;
    color: rgba(var(--done-state-color), .7);
  }
`