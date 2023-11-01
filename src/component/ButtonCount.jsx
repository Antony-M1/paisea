import React from 'react'
import { useState } from 'react';

const ButtonCount = () => {
    
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);
    };
    const handleDecrease = () => {
        setCount(count - 1);
    }
  return (
    <>
      <div className="ButtonCount">
        <div>
          <button onClick={handleAdd}>Add Me</button>
        </div>
        <div>
          <button onClick={handleDecrease}>Decrease Me</button>
        </div>
        <div>
          <p>
            Count <span style={{ color:'green' }}>{count}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default ButtonCount