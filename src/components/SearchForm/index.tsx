import { shallow } from 'zustand/shallow'
import debounce from 'lodash.debounce'

import { useTasksStore } from '../../store/useTasks'

import { Button, SearchFormStyled, Input } from './styles'
import { ChangeEvent } from 'react'

export const SearchForm: React.FC = () => {
  const [filter, setFilter] = useTasksStore(store =>
    [store.filter, store.setFilter],
    shallow
  )

  const handleInputChange = debounce((event: ChangeEvent<HTMLInputElement>) => {
    const filter = event.target.value
    setFilter(filter)
  }, 300)

  return (
    <SearchFormStyled>
      <Button type='button'>
        <i className='bi bi-search' />
      </Button>

      <Input
        type='search'
        name='filter'
        defaultValue={filter}
        placeholder='Busque por uma tarefa aqui...'
        onChange={handleInputChange}
      />
    </SearchFormStyled>
  )
}