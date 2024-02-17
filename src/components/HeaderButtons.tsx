import { type Dispatch, type SetStateAction } from 'react'

interface Props {
  toggleRowColors: () => void
  sortByCountry: () => void
  handleResetUsers: () => void
  setFilterCountry: Dispatch<SetStateAction<string | null>>
  sortedByCountry: boolean
  areUsersAltered: boolean
}

const HeaderButtons = ({
  toggleRowColors,
  sortByCountry,
  handleResetUsers,
  sortedByCountry,
  areUsersAltered,
  setFilterCountry,
}: Props) => {
  return (
    <header className='buttons'>
      <button onClick={toggleRowColors}>Color Rows</button>
      <button onClick={sortByCountry}>
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
