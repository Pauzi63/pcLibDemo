import { createContext, Dispatch, SetStateAction } from 'react';

const initialState = {
  darkMode: false,
  setDarkMode: (darkMode: boolean) => {},
  language: null as string | null,
  setLanguage: (language: string) => {},
};

export const UserLayoutSettings = createContext(initialState);
