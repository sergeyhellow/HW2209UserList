import style from './UserTable.module.css';
import { useState,  useEffect} from "react";
import useSWR from 'swr';
import toast from 'react-hot-toast';


async function fetcher(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Ошибка при загрузке данных');
  }
  return response.json();
}

export default function UsersTable() {
  let API_URL = 'http://localhost:3333/users';

  const
    [backSort, setBackSort] = useState(false),
    { data: userList, error,isLoading,  mutate } = useSWR(API_URL, fetcher);

   // async function removeUser  (userId) {
    //  const updatedUserList = userList.filter((user) => user.id !== userId);
      
    //  mutate(updatedUserList);
  //  };
             

     async function removeUser(id) {
     
      const 
          updatedUserList = userList.filter((user) => user.id !== id);
          
          mutate(updatedUserList);
          const response=await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    
      if (response.ok) {
         await toast.success('Успешно удалено');
        
    
       mutate(updatedUserList); // Обновление данных с оптимистической оптимизацией
       } else {
         await toast.error('Ошибка при удалении ' + id);
        }
     }






    const editUser = (userId) => {
      setEditingUserId(userId);
      // Найти пользователя с заданным ID и установить его данные для редактирования
      const userToEdit = userList.find((user) => user.id === userId);
      setEditingUserData(userToEdit);
    };

    
      console.log('isLoading:', isLoading);
      console.log('error:', error);
      console.log('userList:', userList);
     // console.log('isValidating:', isValidating);

      const sortBy = (prop) => {
        const sortedUsers = [...userList];
        if (backSort) {
          sortedUsers.sort(compareValues(prop));
          setBackSort(false);
        }
        if (!backSort) {
          sortedUsers.sort(compareValues(prop, 'desc'));
          setBackSort(true);
        }
        mutate(sortedUsers, false);
        console.log('MatateUserList:', userList);
      };

  return (
    <>
      <div>
        <table className={style.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th ><label onClick={() => { sortBy('name') }}>Name <br />(click for sort)</label></th>
              <th><label onClick={() => { sortBy('username') }}>Username <br />(click for sort)</label></th>
              <th>City</th>
              <th>Phone</th>
              <th><label onClick={() => { sortBy('website') }}>Website <br />(click for sort)</label></th>
              <th>Company Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

          
          {isLoading ? (
              <tr>
                <td colSpan="7">Загрузка данных...</td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="7">Ошибка при загрузке данных</td>
              </tr>
            ) : userList && userList.length > 0 ? (
              userList.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.address?.city}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>{user.company?.name}</td>
                  <td>
                    <label onClick={() => removeUser(user.id)}>✂️ Delete ✂️</label>
                    <label>✂️ Edit ✂️</label>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">Нет данных для отображения</td>
              </tr>
            )}


          </tbody>
        </table>
      </div>
    </>
  );
}



// функция динамической сортировки , 
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









