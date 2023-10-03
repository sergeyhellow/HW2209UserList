import { useState, useEffect } from "react";

import ListOfMovies from "./ListOfMovieCards";

export default function FillListOfMovies (){
    const
    [movies, setMovies] = useState([]),
    [error, setError] = useState(null);

  useEffect(()=>{
    async function f(){
     try {
        setError(null);
        const 
          res = await fetch('https://www.omdbapi.com/?s=oka&apikey=ae72b4ad');
        if (!res.ok) throw new Error('fetch error');
        setMovies (await res.json());  
        console.log(movies);

      } catch(err){
        setError(err);
      }
    }
    f();
  } ,[]);

 
  if(error) return <h2 style={{color:'red'}}> {error.toString()}</h2>
  if (movies) { return <ListOfMovies movies={movies}/>}
  return <h5>...loading</h5>;

}