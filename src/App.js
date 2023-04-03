import './App.css';
import { Home } from './Components/Home';
import Details from './Pages/Details';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='details' element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
