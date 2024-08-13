import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ferdowsi from "./pages/Ferdowsi";
import Charachters from "./pages/Characters";
import Stories from "./pages/Stories";
import Gallery from "./pages/Gallery";
import Artworks from "./pages/Artworks";
import Blog from "./pages/blog";
import Educate from "./pages/Educate";
import Store from "./pages/Store";
import Favorites from "./pages/Favorites";
import CharacterDetail from "./pages/CharacterDetail";
import { CharactersProvider } from "./pages/CharactersContext";

function App() {
  return (
    <>
      <CharactersProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ferdowsi" element={<Ferdowsi />} />
            <Route path="/characters" element={<Charachters />} />
            <Route path="/characters/:id" element={<CharacterDetail />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/artworks" element={<Artworks />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/educate" element={<Educate />} />
            <Route path="/store" element={<Store />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Router>
      </CharactersProvider>
    </>
  );
}

export default App;
