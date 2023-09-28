import style from './UserTable.module.css'
import { useState, useEffect } from "react";



export default function UsersTable( {users}) {
    
    console.log(users);
    const 
      [backSort, setBackSort] =  useState(false),
      [userList, setUserList] = useState(users),
      removeUser = (userId) => {
            const updatedUserList = userList.filter((user) => user.id !== userId);
        setUserList(updatedUserList);
      };
     
      const sortBy = (prop) => {
        const sortedUsers = [...userList];
        if(backSort){
        sortedUsers.sort(compareValues(prop));
        setBackSort(false);
        }
        if(!backSort){
          sortedUsers.sort(compareValues(prop,'desc'));
          setBackSort(true);
          }
        setUserList(sortedUsers);
      }

         
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
            <th ><label onClick={()=>{sortBy('name')}}>Name <br/>(click for sort)</label></th>
            <th><label onClick={()=>{sortBy('username')}}>Username <br/>(click for sort)</label></th>
            <th>City</th>
            <th>Phone</th>
            <th><label onClick={()=>{sortBy('website')}}>Website <br/>(click for sort)</label></th>
            <th>Company Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.address.city}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
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


// функция динамической сортировки , честно стащил из сети
function compareValues(key, order='asc') {
  return function(a, b) {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      
        return 0; 
    }

    const varA = (typeof a[key] === 'string') ? 
      a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ? 
      b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order == 'desc') ? (comparison * -1) : comparison
    );
  };
}









