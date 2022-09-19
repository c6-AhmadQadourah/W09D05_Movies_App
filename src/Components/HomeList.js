import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";

const HomeList = ({ setId, setHidden }) => {
  const [movies, setmovies] = useState([]);
  const [nextPage, setNextPage] = useState([]);

  useEffect(() => {
    const AllMovies = axios
      .get(
        " https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a"
      )
      .then((response) => {
        console.log(response.data.results);
        setmovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });

    const next = axios
      .get(
        " https://api.themoviedb.org/3/discover/movie?page=2&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a"
      )
      .then((response) => {
        console.log(response.data.results);
        setNextPage(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {movies.map((elem, i) => {
        return (

          <div className="container">
          <div className="imagediv">
<img 
              key={elem.id}
              className="img"
              src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${elem.poster_path}`}
            />
            </div>
          <div className="elem">
            <h1
              onClick={() => {
                setId(elem.id);
                setHidden(true);
                console.log(elem.id);
              }}
              key={i}
            >
              {elem.title}
            </h1>
            <div className="starDiv" >
          
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              {elem.vote_average <=2 ?<span class="fa fa-star checked"></span> :elem.vote_average <=4 ? <div> <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span> </div>: elem.vote_average<=7 ?<div> <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span> </div>:<div> <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span> </div>  }
              </div>

            <p> {elem.overview} </p>
            <p className="date"> Release date : {elem.release_date}</p> 
           <p className="date"> Total Votes : {elem.vote_count}</p> 
          </div>
          
          </div>
        );
      })}
    <button onClick={()=>{
      setmovies([...movies, ...nextPage])
      console.log(movies)
    }} > See More</button>


    </>
  );
};

export default HomeList;
