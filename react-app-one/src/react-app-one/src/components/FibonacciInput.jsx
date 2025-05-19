import React, { useState } from 'react';

function FibonacciInput({ onCalculate }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const number = parseInt(inputValue);
    if (!isNaN(number)) {
      onCalculate(number);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      <button type="submit">Calculate Fibonacci</button>
    </form>
  );
}

export default FibonacciInput;