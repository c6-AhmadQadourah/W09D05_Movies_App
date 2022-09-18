import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react"
import MovieDetails from './MovieDetails'
const HomeList = ( {setId , setHidden}) => {
 
  const [movies, setmovies] = useState([]);


  useEffect(() => {
    const AllMovies= axios.get(' https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a')
    .then((response) => {
      console.log(response.data.results)
      setmovies(response.data.results)
      

     
    }).catch((err) => {
        console.log(err)
    })
},[])


  

  return (
    <>
    {  movies.map((elem, i)=>{
     return <div  className="elem">
 <h1 onClick={()=>{setId(elem.id);
  setHidden(true) 
 console.log( elem.id)} 
  } key={i} >
  {elem.title}
      </h1>
      <img key={elem.id}  className='img' src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${elem.poster_path}` } />
      
      <p >  {elem.overview} </p>

      
     </div>
     
    }) }
    
    </>
  )
}

export default HomeList 
