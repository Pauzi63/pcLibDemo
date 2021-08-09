import { createContext } from "react";

const initialState = {
  darkMode: false,
  setDarkMode: (darkMode: boolean) => {},
  language: null as string | null | undefined,
  setLanguage: (language: string) => {},
};

export const UserLayoutSettings = createContext(initialState);
