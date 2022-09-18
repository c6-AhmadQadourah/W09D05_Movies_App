import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import HomeList from "./HomeList";
const MovieDetails = (id) => {
  const [moviesInfo, setmoviesInfo] = useState([]);

  useEffect(() => {
    const info = axios
      .get(
        `https://api.themoviedb.org/3/movie/985939?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`
      )

      .then((response) => {
        console.log(response.data);
        setmoviesInfo(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
{moviesInfo.id}

    <div>
      MovieDetails
      
    </div>
    </>
  );
};

export default MovieDetails;
