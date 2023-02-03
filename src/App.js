import './App.css';
import { Home } from './Components/Home';
import Socials from './Pages/Socials';
import Details from './Pages/Details';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='socials' element={<Socials />} />
        <Route path='details' element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
