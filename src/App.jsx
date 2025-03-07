import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Characters } from './pages/Characters'
import { CharacterDetail } from './components/CharacterDetail'
import Planets from './pages/Planets'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className="min-h-screen text-white flex flex-col items-center bg-[url(assets/bg-image.png)] bg-center bg-cover bg-fixed font-bangers">
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterDetail/>}/>
          <Route path="/planets" element={<Planets />} />
        </Routes>

        </BrowserRouter>
      </div>
    </>
  )
}

export default App
