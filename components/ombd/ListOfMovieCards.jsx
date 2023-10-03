
import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";


    export default function ListOfMovies({ movies }) {
        // Проверяем, что массив "Search" существует в объекте movies
        if (movies && movies.Search && Array.isArray(movies.Search)) {
          return (
            <div>
              {movies.Search.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          );
        } else {
          return <div>No movies found</div>; // Выводим сообщение, если массив "Search" не найден
        }
      }

 
