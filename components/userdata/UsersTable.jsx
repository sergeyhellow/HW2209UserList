import style from './UserTable.module.css'
import { useState, useEffect } from "react";



export default function UsersTable({ users }) {
  const [userList, setUserList] = useState(users);
 

  const handleRemoveUser = (userId) => {
    // Удалить пользователя из списка
    const updatedUserList = userList.filter((user) => user.id !== userId);
    setUserList(updatedUserList);
  };

  return (
    <div>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>City</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.city}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.companyName}</td>
              <td>
                <button onClick={() => handleRemoveUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}













// export default function UsersTable ({users}) {
     
//        return (
//         <table className={style.table}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Username</th>
//             <th>City</th>
//             <th>Phone</th>
//             <th>Website</th>
//             <th>Name</th>

//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.name}</td>
//               <td>{user.username}</td>
//               <td>{user.address.city}</td>
//               <td>{user.phone}</td>
//               <td>{user.website}</td>
//               <td>{user.company.name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table> 

//      )}








