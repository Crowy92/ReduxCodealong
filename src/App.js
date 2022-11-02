import './App.css';
import { Home, Deposit, Withdraw } from './pages'
import { Routes, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/deposit">Deposit</NavLink></li>
          <li><NavLink to="/withdraw">Withdraw</NavLink></li>
        </ul>
      </nav>
      <main className="App-header">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/deposit" element={<Deposit />}/>
          <Route path="/withdraw" element={<Withdraw />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
