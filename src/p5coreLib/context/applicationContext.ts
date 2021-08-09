import { createContext } from "react";
import { IUserPermission } from "../interfaces/Ip5coreLibInterfaces";

var initialPermission: IUserPermission[] = [];

const initialState = {
  messageCount: 0,
  setMessageCount: (_messageCount: number) => {},
  notificationOpen: false,
  setNotificationOpen: (_notificationOpen: boolean) => {},
  userPermission: initialPermission,
  setUserPermission: (_userPermission: IUserPermission[]) => {},
};

export const ApplicationContext = createContext(initialState);
