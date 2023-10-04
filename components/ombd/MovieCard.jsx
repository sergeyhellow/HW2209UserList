import style from "./MovieCard.module.css"


export default function MovieCard ({
     movie: 
     {
        Title, Year, imdbID, Type,Poster
     }
    }
    ) {

        if(Poster=="N/A") {Poster='https://klimat-oborudovanie.ru/local/templates/corporate_s1/images/no-image.jpg'}
      
    
      return (
                 
                 <div  className={style.product_container}>
                 <div className={style.product_card}>
                 <img src={Poster}  alt="Product Image" className={style.product_image}/>
                    <p >Название фильма:</p>
                    <h3 className={style.product_title}> {Title}</h3>
                 <p className={style.product_description}>Год выхода: {Year}</p>
                 </div>
                 </div>

                
      ) 
    }


