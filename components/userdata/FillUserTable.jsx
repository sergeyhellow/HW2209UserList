import UsersTable from "./UsersTable";
import UserCard from "./UserCard";
import { useState, useEffect } from "react";



export default function FillUserTable (){
    const
    [users, setUser] = useState([]),
    [error, setError] = useState(null);

  useEffect(()=>{
    async function f(){
     try {
        setError(null);
        const 
          res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('fetch error');
        setUser (await res.json());  

      } catch(err){
        setError(err);
      }
    }
    f();
  } ,[]);

 
  if(error) return <h2 style={{color:'red'}}> {error.toString()}</h2>
  if (users) { return <UsersTable users={users}/>}
  return <h5>...loading</h5>;

}