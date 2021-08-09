// p5LibNotification
// Zweck: hier ist die Logik für den Notification Counter zu hinterlegen
// die function GetNotificationCounter und getCurrentNotificationId müssen vorhanden sein

import globals from "./globals";
import { useLocalStorage } from "../p5coreLib/utils/useLocalStorage";

// Großschreibung notwendig, da ein Hook verwendet wird!
// hier muss die Anzahl der noch nicht gelesenen Notification ermittelt werden
export function GetNotificationCounter() {
  const [notificatonId] = useLocalStorage<any>(
    `${globals.appName}.NOTIFICATIONID`,
    0
  );

  console.log(getCurrentNotificationId(), notificatonId);
  if (getCurrentNotificationId() > notificatonId) {
    return getCurrentNotificationId() - notificatonId;
  } else {
    return 0;
  }
}

// hier muss die dzt. Anzahl der Notification ermittelt oder gesetzt werden werden
export function getCurrentNotificationId(): number {
  return 0; //
}
