import { styled } from 'styled-components';

export const InfoCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  gap: .4rem;
  padding: .5rem;
  border-radius: .3rem;
  color: rgba(var(--state-color), var(--color-opacity));
  background: rgba(var(--state-color), var(--bg-opacity));
  
  p {
    text-align: center;
    font-size: .6rem;
    font-weight: bold;
  }

  span {
    margin: 0 auto;
    /* margin-top: 3rem; */
    font-size: .9rem;
    font-weight: bold;
  }
`