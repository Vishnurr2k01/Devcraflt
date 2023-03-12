import './App.css';
import Dasboard from './pages/Dasboard';
import Home from './pages/home/Home';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dasboard/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
