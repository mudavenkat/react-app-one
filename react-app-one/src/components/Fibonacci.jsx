import React, { useState } from 'react';

function Fibonacci() {
  const [n, setN] = useState('');
  const [result, setResult] = useState(null);

  const calculateFibonacci = (num) => {
    if (num < 0) return 'Invalid input';
    if (num === 0) return 0;
    if (num === 1) return 1;
    let a = 0, b = 1, temp;
    for (let i = 2; i <= num; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult(calculateFibonacci(Number(n)));
  };

  return (
    <div>
      <h2>Fibonacci Calculator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={n}
          onChange={(e) => setN(e.target.value)}
          placeholder="Enter n"
          min="0"
        />
        <button type="submit">Calculate</button>
      </form>
      {result !== null && (
        <p>The {n}th Fibonacci number is: {result}</p>
      )}
    </div>
  );
}

export default Fibonacci;