import "./App.css";
import HomeList from "./Components/HomeList";
import{useState} from 'react'
import MovieDetails from "./Components/MovieDetails";
function App() {

  const [hidden, setHidden] = useState(false);
  const [id, setId] = useState(0);
//const id2 = 985939


  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie App</h1>
      </header>
      <div>

       {!hidden?  <HomeList setId={setId} setHidden={setHidden} /> :<MovieDetails id ={id} setHidden={setHidden} />}  
       
      </div>
      <div>
      
     
      </div>
    </div>
  );
}

export default App;
