import "./App.css";
import HomeList from "./Components/HomeList";
import{useState} from 'react'
import MovieDetails from "./Components/MovieDetails";
function App() {
  const [hidden, setHidden] = useState(false);
  const [id, setId] = useState("");



  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie App</h1>
      </header>
      <div >

       {!hidden?  <HomeList id={setId} /> :<MovieDetails id={id}/>}  
       
      </div>
      <div>
      
     
      </div>
    </div>
  );
}

export default App;
