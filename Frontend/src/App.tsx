import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ferdowsi from "./components/Ferdowsi.jsx";



function App() {

  return (
    <>
    <Home />
    <Router>
      <Routes>
        <Route path="/ferdowsi" element={<Ferdowsi />} />
        {/* <Route path="/characters" element={<Characters />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/art-works" element={<ArtWorks />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/educate" element={<Educate />} />
        <Route path="/store" element={<Store />} />
        <Route path="/favorites" element={<Favorites />} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
