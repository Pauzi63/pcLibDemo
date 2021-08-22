import {
  AccountInfo,
  IPublicClientApplication,
  InteractionRequiredAuthError,
} from "@azure/msal-browser";

import { useMsal } from "@azure/msal-react";
import { useState } from "react";

export default async function getAccessToken(
  instance: IPublicClientApplication,
  accounts: AccountInfo[]
) {
  // const [accessToken, setAccessToken] = useState<string>();

  console.log("accounts ", accounts);
  console.log("accounts length", accounts.length);

  async function doit() {
    if (accounts.length > 0) {
      const request = {
        scopes: ["User.Read"],
        account: accounts[0],
      };
      const a2 = await instance
        .acquireTokenSilent(request)
        .then((response) => {
          console.log("token response: ", response);
          console.log("token accessToken: ", response.accessToken);
          // setAccessToken(response.accessToken);
          return response.accessToken;
        })
        .catch((error) => {
          console.log("token response error! ");
          // acquireTokenSilent can fail for a number of reasons, fallback to interaction
          if (error instanceof InteractionRequiredAuthError) {
            instance.acquireTokenPopup(request).then((response) => {
              // setAccessToken(response.accessToken);
              return response.accessToken;
            });
          }
        });
      return a2;
    }
    return "";
  }

  const abc = doit().then((x) => {
    console.log("doit x: ", x);
    return x;
  });
  console.log("doit abc ", abc);
  // return abc;
}
