import { createContext } from 'react';

const initialState = {
  messageCount: 0,
  setMessageCount: (messageCount: number) => {},
};

export const ApplicationContext = createContext(initialState);
