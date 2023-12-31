
import style from "./MovieCard.module.css"

import MovieCard from "./MovieCard";


    export default function ListOfMovies({ movies }) {
       
        if (movies && movies.Search && Array.isArray(movies.Search)) {
          return (
            <div  className={style.product_container}>
              {movies.Search.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          );
        } 
      

        else if( movies && movies.Response === "False") {
            return <div>{movies.Error} </div>; 
           }
        else {
          return <div>No movies found</div>; 
        }
      }

 
