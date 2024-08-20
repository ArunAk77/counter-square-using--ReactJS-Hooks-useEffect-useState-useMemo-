import React, { useState, useMemo, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Render() {
  const [number, setNumber] = useState(0); 
  const [result, setResult] = useState(null);

  const cube = useMemo(() => {
    return number * number ;
  }, [number]);

  const increment = useCallback(() => {
    setNumber((prevNumber) => prevNumber + 1);
  }, []);

  const decrement = useCallback(() => {
    setNumber((prevNumber) => prevNumber - 1);
  }, []);

  useEffect(() => {
    console.log("Connection Is Completed: " + cube);
    setResult(cube);
  }, [number, cube]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Counter Square</h2>
      <p style={{ fontSize: '18px' }}>Current number: {number}</p>
      <p style={{ fontSize: '18px' }}>Square of the number: {result}</p>
      <button onClick={increment} style={{ padding: '10px 20px', marginRight: '10px' }}>
        Increment
      </button>
      <button onClick={decrement} style={{ padding: '10px 20px' }}>
        Decrement
      </button>
    </div>
  );
}

ReactDOM.render(<Render />, document.getElementById('root'));
