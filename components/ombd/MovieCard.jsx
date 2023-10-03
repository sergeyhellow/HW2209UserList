import style from "./MovieCard.module.css"


export default function MovieCard ({
     movie: 
     {
        Title, Year, imdbID, Type,Poster
     }
    }
    ) {
      
    
      return (
      

            <div className={style.contakiner}>
            <div className={style.wrapper}>
            <div className={style.banner_image} > </div>
            <h1> {Title}</h1>
            <p>{Year} <br/>
                {imdbID} {Type}</p>
            </div>
            <div className={style.button_wrapper}> 

            <button className={style.btn}>DETAILS</button>
                <button className={style.btn}>BUY NOW</button>
            </div>
                </div>

      ) 
    }


    // {
    //     "Title": "Oke Oka Jeevitham",
    //     "Year": "2022",
    //     "imdbID": "tt14989778",
    //     "Type": "movie",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BY2VmYmJhZTktYTAwNS00M2VmLTk2NDgtMmJiZTQ0ODU5Y2M1XkEyXkFqcGdeQXVyOTUxNDE5Nzk@._V1_SX300.jpg"
    //     },