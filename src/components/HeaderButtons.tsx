interface Props {
  toggleRowColors: () => void
  sortByCountry: () => void
  handleResetUsers: () => void
  sortedByCountry: boolean
  areUsersAltered: boolean
}

const HeaderButtons = ({
  toggleRowColors,
  sortByCountry,
  handleResetUsers,
  sortedByCountry,
  areUsersAltered
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
    </header>
  )
}
export default HeaderButtons
