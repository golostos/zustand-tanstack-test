import React from "react";
import { useUser } from "./useUser";

export default function Reset() {
  const reset = useUser((store) => store.reset);
  return (
    <div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
