import { type Dispatch, type SetStateAction } from 'react'
import { SortBy } from '../types.d'

interface Props {
  toggleRowColors: () => void
  resetSorting: () => void
  resetUsers: () => void
  setFilterCountry: Dispatch<SetStateAction<string | null>>
  sorted: SortBy
  areUsersAltered: boolean
}

const HeaderButtons = ({
  toggleRowColors,
  resetSorting,
  resetUsers,
  areUsersAltered,
  setFilterCountry,
  sorted,
}: Props) => {
  return (
    <header className='buttons'>
      <button onClick={toggleRowColors}>Color Rows</button>
      <button onClick={resetSorting} disabled={sorted === SortBy.NONE}>
        Reset Sorting
      </button>
      <button onClick={resetUsers} disabled={!areUsersAltered}>
        Reset List
      </button>
      <input
        type='search'
        placeholder='Filter by country'
        onChange={e => {
          setFilterCountry(e.target.value)
        }}
      />
    </header>
  )
}
export default HeaderButtons
