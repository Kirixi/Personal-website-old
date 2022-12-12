import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Home } from './Components/Home';
import Skils from './Components/Skils';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skils />
    </div>
  );
}

export default App;
