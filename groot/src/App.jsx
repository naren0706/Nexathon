import './App.css';
import About from './components/About';
import Home from './components/Home/Home';
import NoPage from './components/NoPage';
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Groot
      </header>
      <div className="container">
        <div className="sub-container">
        <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about/:message" element={<About />} />
            </Routes>
        </Router>
        </div>
        </div>
    </div>
  );
}

export default App;
