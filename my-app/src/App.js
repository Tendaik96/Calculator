import './App.css';
import Header from './components/Header/Header'
import Calculator from './components/Calculator/Calculator';
import History from './components/History/History';
import { results } from './components/Calculator/Calculator';

function App() {
  return (
    <div className='main-background'>
      <Header />
      <Calculator />
      <History search={results} />
    </div>
  );
}

export default App;
