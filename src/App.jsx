//import useState from react

import { useState } from "react";

// import { useState } from "react";
function App() {
  let count = 0;
  //initialize state
  const [increment, setIncrement] = useState(count);
  function handleIncrement() {
    // count=count+1;
    setIncrement(increment + 1);
    if(increment>=10){
        alert(`Reached maximum value: ${increment}`);
      setIncrement(increment);
    }
  }
  function handleDecrement() {
    setIncrement(increment - 1);
    if(increment===0){
      alert(`Reached minimum value: ${increment}`);
      setIncrement(increment);
    }
  }
  return (
    <>
      <button id="increment" onClick={handleIncrement}>
        Increment
      </button>
      <button id="decrement" onClick={handleDecrement}>
        Decrement
      </button>
      <p id='paragraph'>{increment}</p>
    </>
  );
}
export default App;
