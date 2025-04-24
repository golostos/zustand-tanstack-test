import { createStore } from "zustand";
import { devtools } from "zustand/middleware";

export type UserStore = {
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

export const createUserStore = (initProps = initialState) => {
  return createStore<UserStore>()(
    devtools((set) => ({
      ...initProps,
      setName: (name: string) => set({ name }, undefined, "user/setName"),
      setAddress: (address: string) => set({ address }, undefined, "user/setAddress"),
      reset: () => set({ ...initialState }, undefined, "user/reset"),
    }))
  );
};

export type Store = ReturnType<typeof createUserStore>;
