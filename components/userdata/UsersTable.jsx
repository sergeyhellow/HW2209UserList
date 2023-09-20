import style from './UserTable.module.css'


export default function UsersTable ({users}) {
     
       return (
        <table className={style.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>City</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Name</th>

          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.address.city}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table> 

     )}








