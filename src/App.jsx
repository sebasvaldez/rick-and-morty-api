
import { CharacterList } from "./components/CharacterList";
import FooterPage from "./components/FooterPage";

const App = () => {
 

  return(

  <div className="bg-dark text-white">




    <h1  className="text-center display-1 py-4 namePage"> <a href="/">Rick and Morty Api</a> </h1>


    <CharacterList />
    
    <FooterPage />

  </div>

  )
};

export default App;
