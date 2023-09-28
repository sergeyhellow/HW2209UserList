import style from './UserTable.module.css'
import { useState, useEffect } from "react";



export default function UsersTable( {users}) {
    console.log(users);
    const 
      [userList, setUserList] = useState(users),
      removeUser = (userId) => {
            const updatedUserList = userList.filter((user) => user.id !== userId);
        setUserList(updatedUserList);
      };
     
      const sortByName = () => {
        const sortedUsers = [...userList];
        sortedUsers.sort((user1, user2) => {
          const name1 = user1.name.toLowerCase();
          const name2 = user2.name.toLowerCase();
          if (name1 < name2) return -1;
          if (name1 > name2) return 1;
          return 0;
        });
        setUserList(sortedUsers);
      };


    useEffect(() => {
        //  изменении users обновляем userList
        setUserList(users);
        //sortByName ();
      }, [users]); // Зависимость useEffect от users
    
     

  return (
    <div>
      <table className={style.table}>
        <thead>
          <tr>
            <th ><label onClick={sortByName}>Name <br/>(click for sort)</label></th>
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
                <button onClick={() => removeUser(user.id)}>Delete</button>
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








