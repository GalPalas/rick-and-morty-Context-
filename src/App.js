import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "components/header/Header";
import Characters from "components/characters/Characters";
import Character from "components/character/Character";
import Footer from "components/footer/Footer";
import CharacterContext from "components/context/charactersContext";
import { useFetchCharacters } from "components/hooks/useFetchCharacters";

function App() {
  const { characters, status } = useFetchCharacters();

  return (
    <div className="App">
      <Header />
      <CharacterContext.Provider value={{ status, characters }}>
        <Router>
          <Routes>
            <Route path="/character/:id" element={<Character />}></Route>
            <Route path="/" element={<Characters />}></Route>
          </Routes>
        </Router>
      </CharacterContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
