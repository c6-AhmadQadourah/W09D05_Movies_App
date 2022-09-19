import "./App.css";
import HomeList from "./Components/HomeList";
import{useState} from 'react'
import MovieDetails from "./Components/MovieDetails";
import Header from "./Components/Header";
function App() {

  const [hidden, setHidden] = useState(false);
  const [id, setId] = useState(0);
  
  



  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Movie">Movie Slayer</h1>
        <Header setHidden={setHidden}/>
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
