import styled from 'styled-components'

export const TaskFormStyled = styled.form`
  display: flex;
  width: 40vw;
  gap: 0.8rem;
`

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Select = styled.select`
  font-size: 0.7rem;
  padding: 0.3rem 0.6rem;
  border-radius: ${(props) => props.theme.borderRadius.small};
  width: max-content;
  outline: none;
  color: ${(props) => props.theme.colors.text.title};
  /* border: 1px solid rgba(87, 104, 239, .2); */
  border: 0;
  background: ${props => props.theme.colors.opaque};

  option {
    background: ${(props) => props.theme.colors.bg.secondary};
  }
`

export const TextArea = styled.textarea`
  border: none;
  resize: none;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.text.title};
  margin: 0.5rem 0;
  background: transparent;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background: ${(props) => props.theme.colors.border};
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  padding-top: 0.5rem;

  button {
    max-width: 40%;
  }
`

export const Status = styled.div`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.text.placeholder};
`

export const Button = styled.button`
  color: #fff;
  font-size: 0.7rem;
  padding: 0.3rem 0.5rem;
  border-radius: 20px;
  width: 30%;
  background-color: ${(props) => props.theme.colors.bg.details};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0c8de4;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`
