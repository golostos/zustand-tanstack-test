import React from "react";
import User from "./components/User";
import { useCountStore } from "./store-immer/storeImmer";

function App() {
  const [show, setShow] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const { count: countImmer, increment, decrement, reset } = useCountStore();
  return (
    <>
      {show && <User />}      
      <button onClick={() => setShow(!show)}>Toggle</button>
      <hr />
      <h2>Count</h2>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>

      <h2>Immer count: {countImmer}</h2>
      <button onClick={() => increment(1)}>Increment</button>
      <button onClick={() => decrement(1)}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
