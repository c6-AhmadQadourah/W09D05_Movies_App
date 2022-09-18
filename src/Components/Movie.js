import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react"


const Movie = (newpage) => {

  useEffect(() => {
    const next= axios.get(' https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a')
    .then((response) => {
      console.log(response.data.results)
     
      

     
    }).catch((err) => {
        console.log(err)
    })
},[])

  return (
    <div>Movie</div>
  )
}

export default Movie