import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "components/header/Header";
import Characters from "components/characters/Characters";
import Character from "components/character/Character";
import Footer from "components/footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/character/:id" element={<Character />}></Route>
          <Route path="/" element={<Characters />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
