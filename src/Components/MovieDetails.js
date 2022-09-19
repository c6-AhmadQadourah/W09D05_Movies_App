import axios from "axios";
import { useEffect, useState, useContext } from "react";
import HomeList from "./HomeList";
import Actors from "./Actors";

const MovieDetails = ({ id, setHidden }) => {
  const [moviesInfo, setmoviesInfo] = useState([]);
  const [hide, setHide] = useState(true);

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
      <div className="imagediv">
      <img   className='img' src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${moviesInfo.poster_path}` } />
      </div>
    <h1 id="titleinfo"> {moviesInfo.original_title}</h1>
    <div className="starDiv" id="star" >
          
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              {moviesInfo.vote_average <=2 ?<span class="fa fa-star checked"></span> :moviesInfo.vote_average <=4 ? <div> <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span> </div>: moviesInfo.vote_average<=7 ?<div> <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span> </div>:<div> <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span> </div>  }
              </div>
    <h3 className="info"> {moviesInfo.overview}</h3>
    <h2 className="date1">release_date : {moviesInfo.release_date} </h2>
    <h2 className="date2">Votes : {moviesInfo.vote_count} </h2>
     <h3 className="date1">Status: {moviesInfo.status}</h3>
     <h3 className="date2">Duration: {moviesInfo.runtime} mins</h3>
     <h3 className="date1">revenue: {moviesInfo.revenue} $</h3>
     <h3 className="date2">budget: {moviesInfo.budget} $</h3> 
    <div className="buttonsDiv">
    <button className="buttons" id="backToHomeButton"  onClick={()=>{setHidden(!setHidden)}} > Back To home</button>
    <button className="buttons" id="addToFavButton" > Add To Favorites</button>
    <button className="buttons" id="goToFavButton"> Go to Favorites</button>
    <button className="buttons" id="showActorsButton" onClick={()=>{setHide(!hide) }} >Show Actors</button>
    </div>
    </div>
    <div className="actorsDiv">
     { !hide ? <Actors /> : null}
    </div>
    </>
  );
};

export default MovieDetails;
