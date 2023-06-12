import { styled } from 'styled-components'

export const ColumnStyled = styled.li`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: .5rem;
  border: 1px solid rgba(255, 255, 255, .1);
  border-radius: ${props => props.theme.borderRadius.large};
  /* background: rgba(255, 255, 255, .05); */
  overflow: hidden;

  &.drop {
    border: 2px dashed ${props => props.theme.colors.bg.details};
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem;
`

export const Title = styled.h3`
  font-size: .8rem;
  color: ${props => props.theme.colors.text.placeholder};
`

export const Amount = styled.div`
  padding: .2rem .4rem;
  font-size: .6rem;
  font-weight: bold;
  border-radius: 100%;
  color: ${props => props.theme.colors.bg.details};
  background: rgba(87, 104, 239, .2);
`