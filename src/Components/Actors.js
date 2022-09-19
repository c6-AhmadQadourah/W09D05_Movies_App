import React from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";


const Actors = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    axios.get `https://api.themoviedb.org/3/movie/985939/credits?api_key=1bfa430aada4409bfa6a3c5528128e8a`
    .then((response)=>{
      setActors(response.data.cast)
      console.log (response.data.cast)
      
    } )
  }, []);
 

console.log (actors)
  return <div className="actorsDiv">
{actors.map((elem,i)=>{
  return  <div className="actors">
    {  <img   className='img' src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${elem.profile_path}` } />}
  </div>
})}

  </div>;
};

export default Actors;
