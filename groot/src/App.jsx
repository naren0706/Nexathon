import './App.css';
import Home from './components/Home/Home';
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Table from './components/Table/Table';

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
              <Route path="/Table/:message" element={<Table />} />
            </Routes>
        </Router>
        </div>
        </div>
    </div>
  );
}

export default App;
