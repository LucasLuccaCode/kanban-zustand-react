import { Button, SearchFormStyled, Input } from './styles'

export const SearchForm: React.FC = () => {
  return (
    <SearchFormStyled>
      <Button type='button'>
        <i className='bi bi-search' />
      </Button>

      <Input
        type='search'
        name='filter'
        placeholder='Busque por uma tarefa aqui...'
      />
    </SearchFormStyled>
  )
}