// Provider implementation
import React from "react";
import { useRef } from "react";
import { UserContext } from "./context";
import { createUserStore } from "./createStore";

export default function Provider({ children }: { children: React.ReactNode }) {
  const store = useRef(createUserStore()).current;
  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
}
