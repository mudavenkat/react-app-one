import React from 'react';

function FibonacciHistory({ history }) {
  return (
    <div>
      <h2>Fibonacci History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FibonacciHistory;