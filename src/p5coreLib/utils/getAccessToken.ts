import {
  AccountInfo,
  IPublicClientApplication,
  InteractionRequiredAuthError,
} from "@azure/msal-browser";

import { useMsal } from "@azure/msal-react";
import { useState } from "react";

export async function getAccessToken(
  instance: IPublicClientApplication,
  accounts: AccountInfo[]
) {
  // const [accessToken, setAccessToken] = useState<string>();

  console.log("accounts ", accounts);
  console.log("accounts length", accounts.length);

  let retValue = "";

  // if (accounts.length > 0) {
  const request = {
    scopes: ["User.Read"],
    account: accounts[0],
  };
  await instance
    .acquireTokenSilent(request)
    .then((response) => {
      console.log("token response: ", response);
      console.log("token accessToken: ", response.accessToken);
      // setAccessToken(response.accessToken);
      retValue = response.accessToken;
    })
    .catch((error) => {
      console.log("token response error! ");
      // acquireTokenSilent can fail for a number of reasons, fallback to interaction
      if (error instanceof InteractionRequiredAuthError) {
        instance.acquireTokenPopup(request).then((response) => {
          // setAccessToken(response.accessToken);
          retValue = response.accessToken;
        });
      }
    });

  return retValue;
  // }
}
