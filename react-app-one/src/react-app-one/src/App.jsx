import './App.css'
import { useState } from 'react';
import FibonacciInput from './components/FibonacciInput';
import FibonacciResult from './components/FibonacciResult';
import FibonacciHistory from './components/FibonacciHistory';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const calculateFibonacci = (num) => {
    if (num < 0) return 0;
    if (num === 0) return 0;
    if (num === 1) return 1;
    return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
  };

  const handleCalculate = () => {
    const num = parseInt(inputValue);
    const fibResult = calculateFibonacci(num);
    setResult(fibResult);
    setHistory([...history, { number: num, result: fibResult }]);
  };

  return (
    <div className="App">
      <h1>Fibonacci Number Calculator</h1>
      <FibonacciInput value={inputValue} onChange={setInputValue} onCalculate={handleCalculate} />
      <FibonacciResult result={result} />
      <FibonacciHistory history={history} />
    </div>
  );
}

export default App;