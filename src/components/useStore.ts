import { create } from "zustand";

type Store = {
  name: string;
  address: string;
  setName: (name: string) => void;
  setAddress: (address: string) => void;
  reset: () => void;
};

const initialState = {
  name: "John",
  address: "123 Main St",
};

export const useStore = create<Store>()((set) => ({
  ...initialState,
  setName: (name: string) => {
    console.log("setName");
    set({ name });
  },
  setAddress: (address: string) => set({ address }),
  reset: () => {
    console.log("reset");
    // set({ ...initialState })
    set({ name: "John", address: "123 Main St" });
  },
}));
