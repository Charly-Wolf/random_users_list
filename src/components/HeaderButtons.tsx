import { type Dispatch, type SetStateAction } from 'react'
import { SortBy } from '../types.d'

interface Props {
  toggleRowColors: () => void
  toggleSortByCountry: () => void
  resetUsers: () => void
  setFilterCountry: Dispatch<SetStateAction<string | null>>
  sorted: SortBy
  areUsersAltered: boolean
}

const HeaderButtons = ({
  toggleRowColors,
  toggleSortByCountry,
  resetUsers,
  sorted,
  areUsersAltered,
  setFilterCountry,
}: Props) => {
  return (
    <header className='buttons'>
      <button onClick={toggleRowColors}>Color Rows</button>
      <button onClick={toggleSortByCountry}>
        {sorted === SortBy.COUNTRY ? 'Default Order ' : 'Sort by Country'}
      </button>
      <button onClick={resetUsers} disabled={!areUsersAltered}>
        Reset users
      </button>
      <input
        type='text'
        placeholder='Filter by country'
        onChange={e => {
          setFilterCountry(e.target.value)
        }}
      />
    </header>
  )
}
export default HeaderButtons
