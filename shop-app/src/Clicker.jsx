import React, { useEffect, useState } from "react";

const Clicker = () => {

    const [count, setCount] = useState(0);
  
    const increment = () => {
      setCount(count - 1)
    }
    const decrement = () => {
      setCount(count + 1)
    }

    useEffect(() => {
        console.log('one', count)

        return () => console.log('one good bye')
      }, [count]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>-</button>
      <button onClick={decrement}>+</button>
    </div>
  );
};

export default Clicker;
