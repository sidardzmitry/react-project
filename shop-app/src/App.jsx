import React, { useState } from "react";
import Clicker from "./Clicker";
import Timer from "./Timer";

const App = () => {
  const [isClicker, setClicker] = useState(false);

  const toggleClicker = () => {
    setClicker(!isClicker);
  };

  return (
    <div>
      <h1>Shop App</h1>
      <button onClick={toggleClicker}>Toggle Clicker</button>
      {isClicker && <Clicker />}
      <Timer/>
    </div>
  );
};

export default App;
