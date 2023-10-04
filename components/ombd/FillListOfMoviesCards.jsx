import { useState, useEffect } from "react";
import style from "./MovieCard.module.css"

import ListOfMovies from "./ListOfMovieCards";

export default function FillListOfMovies (){
    const
      [movies, setMovies] = useState([]),
      [error, setError] = useState(null),
      [search, setSearch] = useState('');
 

  useEffect(()=>{
    async function f(){
     try {
        setError(null);
        const 
          res = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=ae72b4ad`);
          console.log(`https://www.omdbapi.com/?s=${search}&apikey=ae72b4ad`);
        if (!res.ok) throw new Error('fetch error');
        setMovies (await res.json());  
        console.log(movies);

      } catch(err){
        setError(err);
      }
    }
    f();
  } ,[search]);


  if(error) return <h2 style={{color:'red'}}> {error.toString()}</h2>
  if (movies) return  (
      <>
       <input className={style.custom_input} placeholder="Введите название фильма" value={search} onInput={evt=>setSearch(evt.target.value)}/>
      <ListOfMovies movies={movies}/>
      
      </>
      )
  
   
    
     
  return <h5>...loading</h5>
}
