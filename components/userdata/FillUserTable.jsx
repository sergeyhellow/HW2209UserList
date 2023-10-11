import UsersTable from "./UsersTable";
import UserCard from "./UserCard";
import { useState, useEffect } from "react";



export default function FillUserTable (){
  //  let API_URL = 'http://localhost:3333/users';
  //   const
  //   [users, setUser] = useState([]),
  //   [error, setError] = useState(null);
    
  //   async function fetcher(url) {
  //     const response = await fetch(url);
  //     if (!response.ok) throw new Error('fetch ' + response.status);
  //     return await response.json();
  //   };

//  useEffect(()=>{
//     async function f(){
//      try {
//         setError(null);
//         const 
//           res = await fetch('http://localhost:3333/users');
//         if (!res.ok) throw new Error('fetch error');
//         setUser (await res.json());  

//       } catch(err){
//         setError(err);
//       }
//     }
//     f();
//   } ,[]);

 
  // if(error) return <h2 style={{color:'red'}}> {error.toString()}</h2>
  // if (users) {
    
    return <UsersTable />
  // return <h5>...loading</h5>;

}