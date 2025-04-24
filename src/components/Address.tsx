import React from "react";
import { useUser } from "./useUser";
// import { useStore } from "./useStore";

export default function Address() {
  console.log("Address rendered");
  const address = useUser((store) => store.address);
  const setAddress = useUser((store) => store.setAddress);
//   const address = useStore((store) => store.address);
//   const setAddress = useStore((store) => store.setAddress);
  return (
    <div>
      {address}
      <input value={address} onChange={(e) => setAddress(e.target.value)} />
    </div>
  );
}
