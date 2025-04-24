import { useContext } from 'react'
import { useStore } from 'zustand'
import { UserStore } from './createStore'
import { UserContext } from './context'

export function useUser<T>(selector: (state: UserStore) => T): T {
  const store = useContext(UserContext)
  if (!store) throw new Error('Missing BearContext.Provider in the tree')
  return useStore(store, selector)
}
