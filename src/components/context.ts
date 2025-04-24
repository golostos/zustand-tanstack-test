import { createContext } from 'react'
import { Store } from './createStore'

export const UserContext = createContext<Store | null>(null)
