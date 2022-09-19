import "./App.css";
import HomeList from "./Components/HomeList";
import{useState ,createContext} from 'react'
import MovieDetails from "./Components/MovieDetails";
import Header from "./Components/Header";
import Actors from "./Components/Actors";


export const idContext = createContext();

function App() {

  const [hidden, setHidden] = useState(false);
  const [id, setId] = useState(0);
 

  
  



  return (
    
      
    <div className="App">
      <idContext.Provider value={id}><Actors/> 
      
     
      <header className="App-header">
        <h1 className="Movie">Movie Slayer</h1>
        <Header setHidden={setHidden}/>
      </header>
      <div>
        
       {!hidden?  <HomeList setId={setId} setHidden={setHidden} /> :<MovieDetails id ={id} setHidden={setHidden}  />}
      </div>
      
      <div>
      
      </div>
      </idContext.Provider>
    </div>
  );
}

export default App;
