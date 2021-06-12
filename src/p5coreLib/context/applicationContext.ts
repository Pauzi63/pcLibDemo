import { createContext } from "react";

const initialState = {
  messageCount: 0,
  setMessageCount: (messageCount: number) => {},
  notificationOpen: false,
  setNotificationOpen: (notificationOpen: boolean) => {},
};

export const ApplicationContext = createContext(initialState);
