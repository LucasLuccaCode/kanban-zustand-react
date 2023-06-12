import { styled } from 'styled-components'

export const ColumnStyled = styled.li`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: .5rem;
  border: 2px solid rgba(255, 255, 255, .03);
  border-radius: ${props => props.theme.borderRadius.large};
  /* background: rgba(255, 255, 255, .02); */
  overflow: hidden;

  &.drop {
    border: 2px dashed rgba(87, 104, 239, .8);
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
  color: ${props => props.theme.colors.text.title};
`

export const Amount = styled.div`
  padding: .2rem .4rem;
  font-size: .6rem;
  font-weight: bold;
  border-radius: 100%;
  color: ${props => props.theme.colors.bg.details};
  background: rgba(87, 104, 239, .2);
`

export const DropZone = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: .5rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: .2rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.bg.details};
    border-radius: 50px;
  }
`