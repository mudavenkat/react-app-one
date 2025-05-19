import React from 'react';

function FibonacciResult({ result }) {
  return (
    <div>
      <h2>Fibonacci Result</h2>
      <p>{result !== null ? `The Fibonacci number is: ${result}` : 'Please enter a number to see the result.'}</p>
    </div>
  );
}

export default FibonacciResult;