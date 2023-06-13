import { styled } from 'styled-components'

export const ColumnStyled = styled.li`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: .5rem;
  border: 2px solid rgba(255, 255, 255, .03);
  border-radius: ${props => props.theme.borderRadius.large};
  overflow: hidden;

  &.drop {
    border: 2px dashed rgba(var(--state-color), var(--color-opacity));
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem;
`

export const Title = styled.h3`
  font-size: .9rem;
  color: rgba(var(--state-color), var(--color-opacity));
  /* color: ${props => props.theme.colors.text.title}; */
`

export const Amount = styled.div`
  padding: .2rem .4rem;
  font-size: .6rem;
  font-weight: bold;
  border-radius: 100%;
  color: rgba(var(--state-color), var(--title-opacity));
  background: rgba(var(--state-color), var(--bg-opacity));
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
    background: rgba(var(--state-color), var(--color-opacity));
    border-radius: 50px;
  }
`