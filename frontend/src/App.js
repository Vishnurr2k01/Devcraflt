import './App.css';
import Dasboard from './pages/Dasboard';
import Home from './pages/home/Home';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dasboard/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
