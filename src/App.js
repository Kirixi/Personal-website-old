import './App.css';
import Navbar from './Components/Navbar';
import { Home } from './Components/Home';
import Socials from './Pages/Socials';
import Skils from './Components/Skils';
import Projects from './Components/Projects';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Skils />
        <Projects />
      </div>
      <Routes>
        <Route path='socials' element={<Socials />} />
        <Route path='details' />
      </Routes>
    </>
  );
}

export default App;
