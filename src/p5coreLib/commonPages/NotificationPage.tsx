import React, { useContext } from "react";
import NotificationCompontent from "../../components/NotificationComponent";
import { ApplicationContext } from "../context/applicationContext";
import globals from "../../p5Lib/globals";
import { useLocalStorage } from "../utils/useLocalStorage";
import { getCurrentNotificationId } from "../../p5Lib/p5LibNotification";

interface Props {}

const NotificationPage = () => {
  const { setMessageCount, setNotificationOpen } =
    useContext(ApplicationContext);

  const [notificationId, setNotificationId] = useLocalStorage<any>(
    `${globals.appName}.NOTIFICATIONID`,
    0
  );

  function doit(x: number) {
    console.log("doit: ", x);
  }

  function notificationConfirmed() {
    setMessageCount(0); // Notification Icon auf 0 setzen
    setNotificationOpen(false); // Flag zurücksetzen
    setNotificationId(getCurrentNotificationId()); // neue NotificationId auf "0" (=alles gelesen) setzen
  }

  return (
    <React.Fragment>
      <NotificationCompontent notificationConfirmed={notificationConfirmed} />
    </React.Fragment>
  );
};

export default NotificationPage;
