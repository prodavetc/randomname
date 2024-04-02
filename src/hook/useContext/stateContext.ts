import { createContext } from 'react';

export interface StateContextProps {
  list: string[] | string | undefined;
  setList: (value: string[] | string) => void;
}

export const  StateContext = createContext<StateContextProps | undefined>(undefined);