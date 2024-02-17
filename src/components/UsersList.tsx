import { type User } from '../types'

interface Props {
  users: User[]
  showRowColors: boolean
  deleteUser: (user: User) => void
}

const UsersList = ({ users, showRowColors, deleteUser }: Props) => {
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Country</th>
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
