import axios from "axios";
import { useEffect, useState, useContext } from "react";
import HomeList from "./HomeList";

const MovieDetails = ({ id }) => {
  const [moviesInfo, setmoviesInfo] = useState([]);
  useEffect(() => {
    const info = axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`
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
    <div className="movieBody">
    <h1> {moviesInfo.original_title}</h1>
    <img   className='img' src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${moviesInfo.poster_path}` } />
    <h3> {moviesInfo.overview}</h3>
    <h2>release_date : {moviesInfo.release_date} </h2>
    <h2>Votes : {moviesInfo.vote_count} </h2>
     <h3>Status: {moviesInfo.status}</h3>
     <h3>Duration: {moviesInfo.runtime} mins</h3>
     <h3>revenue: {moviesInfo.revenue} $</h3>
     <h3>budget: {moviesInfo.budget} $</h3>
    </div>
    <div className="buttons">
    <button> Back To home</button>
    <button> Add To Fav</button>
    <button> Go to Fav</button>
    <button>Show Actors</button>

    </div>
    </>
  );
};

export default MovieDetails;
