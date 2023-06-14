import { styled } from 'styled-components';

export const RecentActivityStyled = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: .8rem;
  overflow: hidden;
`;

export const ActivityLabel = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  gap: .5rem;

  h3 {
    font-size: .8rem;
    font-weight: bold;
    color: #aaaab0;
  }
`

export const EmptyActivities = styled.p`
  font-size: .7rem;
  color: ${props => props.theme.colors.text.placeholder};
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: .3rem;
  padding: .2rem .5rem;
  border-radius: .3rem;
  background: rgba(var(--all-state-color), .2);
  border: 1px solid rgba(var(--all-state-color), .1);

  &:hover {
    background: transparent;
    border-color: rgba(var(--all-state-color), .8);
  }

  i, span {
    font-size: .6rem;
    color: rgba(var(--all-state-color), .8);
  }
`

export const Activities = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: .2rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    background: rgba(0, 0, 0, .2);
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.bg.details};
    border-radius: 50px;
  }
`
