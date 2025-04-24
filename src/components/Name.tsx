import React from "react";
import { useUser } from "./useUser";
// import { useStore } from "./useStore";

export default function Name() {
  console.log("Name rendered");
  //   const name = useStore((store) => store.name);
  //   const setName = useStore((store) => store.setName);
  const name = useUser((store) => store.name);
  const setName = useUser((store) => store.setName);
  return (
    <div>
      {name}
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}
