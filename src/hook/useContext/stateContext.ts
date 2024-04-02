import { createContext } from 'react';

export interface StateContextProps {
  length?: number;
  list: string[] | string | undefined;
  setList: (value: string[] | string) => void;
}

export const  StateContext = createContext<StateContextProps | undefined>(undefined);