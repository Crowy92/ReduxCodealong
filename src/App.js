import './App.css';
import { Home, Deposit, Withdraw } from './pages'

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <Home/>
        <Deposit/>
        <Withdraw/>
      </main>
    </div>
  );
}

export default App;
