import * as React from "react";
import axios from "axios";

import { ApplicationContext } from "./applicationContext";
import { GetNotificationCounter } from "../../p5Lib/p5LibNotification";
import { IUserPermission } from "../interfaces/Ip5coreLibInterfaces";
import globals from "../../p5Lib/globals";
import { getUserAccountGuidFromToken } from "../utils/useJWT";

function ApplicationContextService(props: any) {
  const [messageCount, setMessageCount] = React.useState(
    GetNotificationCounter()
  );
  const [notificationOpen, setNotificationOpen] = React.useState(false);
  const [userPermission, setUserPermission] = React.useState<IUserPermission[]>(
    []
  );
  const [permissionLoaded, setPermissionLoaded] = React.useState(false);

  React.useEffect(() => {
    console.log("ApplicatoinContextService Mount()");
    async function getUserPermission(
      userAccountGuid: string,
      application: string
    ) {
      const endPoint = `${process.env.REACT_APP_API_URL}/UserAccount/userpermission/${userAccountGuid}/application/${application}`;

      await axios
        .get<IUserPermission[]>(endPoint)
        .then((response) => {
          setUserPermission(response.data);
        })
        .catch(() => {
          setPermissionLoaded(true);
        }); // trotzdem weitermachen...
    }
    if (globals.krmCoreLogin === true) {
      getUserPermission(getUserAccountGuidFromToken(), globals.appName).then(
        () => {
          console.log("before fetch ready");
          setPermissionLoaded(true);
          console.log("after fetch ready");
        }
      );
    } else {
      setPermissionLoaded(true);
    }
  }, []);

  React.useEffect(() => {
    console.log("Permisssion loaded: ", permissionLoaded);
  }, [permissionLoaded]);

  // es muss unbedingt abgewartet werden, dass die permissions geladen sind
  if (permissionLoaded === false) {
    return <div />;
  }

  return (
    <ApplicationContext.Provider
      value={{
        messageCount,
        setMessageCount,
        notificationOpen,
        setNotificationOpen,
        userPermission,
        setUserPermission,
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationContextService;
