import { type Dispatch, type SetStateAction } from 'react'

interface Props {
  toggleRowColors: () => void
  sortByCountry: () => void
  handleResetUsers: () => void
  setFilterCountry: Dispatch<SetStateAction<string | null>>
  sortedByCountry: boolean
  areUsersAltered: boolean
  filterCountry: string | null
}

const HeaderButtons = ({
  toggleRowColors,
  sortByCountry,
  handleResetUsers,
  sortedByCountry,
  areUsersAltered,
  setFilterCountry,
  filterCountry,
}: Props) => {
  return (
    <header className='buttons'>
      <button onClick={toggleRowColors}>Color Rows</button>
      <button
        onClick={sortByCountry}
        disabled={filterCountry !== null && filterCountry.length > 0}
      >
        {sortedByCountry ? 'Default Order ' : 'Sort by Country'}
      </button>
      <button onClick={handleResetUsers} disabled={!areUsersAltered}>
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
