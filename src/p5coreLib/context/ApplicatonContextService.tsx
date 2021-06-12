import * as React from "react";
import { ApplicationContext } from "./applicationContext";
import { GetNotificationCounter } from "../../p5Lib/p5LibNotification";

function ApplicationContextService(props: any) {
  const [messageCount, setMessageCount] = React.useState(
    GetNotificationCounter()
  );
  const [notificationOpen, setNotificationOpen] = React.useState(false);

  return (
    <ApplicationContext.Provider
      value={{
        messageCount,
        setMessageCount,
        notificationOpen,
        setNotificationOpen,
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationContextService;
