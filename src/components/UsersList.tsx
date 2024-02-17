import { SortBy, type User } from '../types.d'

interface Props {
  users: User[]
  showRowColors: boolean
  deleteUser: (user: User) => void
  changeSort: (sort: SortBy) => void
}

const UsersList = ({ changeSort, users, showRowColors, deleteUser }: Props) => {
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>Photo</th>
          <th
            className='pointer'
            onClick={() => {
              changeSort(SortBy.NAME)
            }}
          >
            Name
          </th>
          <th
            className='pointer'
            onClick={() => {
              changeSort(SortBy.LAST)
            }}
          >
            Last Name
          </th>
          <th
            className='pointer'
            onClick={() => {
              changeSort(SortBy.COUNTRY)
            }}
          >
            Country
          </th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody className={showRowColors ? 'table-striped' : ''}>
        {users.map(user => {
          return (
            <tr key={user.login.uuid}>
              <td>
                <img src={user.picture.thumbnail} />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button
                  className='delete-btn'
                  onClick={() => {
                    deleteUser(user)
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
export default UsersList
