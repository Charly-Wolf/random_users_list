import { type User } from '../types'

interface Props {
  users: User[]
  showRowColors: boolean
}

const UsersList = ({ users, showRowColors }: Props) => {
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

      <tbody>
        {users.map((user, index) => {
          const backgroundRowColor = index % 2 === 0 ? '#333' : '#555'
          const color = showRowColors ? backgroundRowColor : 'transparent'
          return (
            <tr key={user.login.uuid} style={{ backgroundColor: color }}>
              <td>
                <img src={user.picture.thumbnail} />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
export default UsersList
