import { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { InteractionRequiredAuthError } from "@azure/msal-browser";

export default function useAccessToken() {
  const { instance, accounts } = useMsal();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  console.log("accounts ", accounts);
  console.log("accounts length", accounts.length);

  if (accounts.length > 0) {
    const request = {
      scopes: ["User.Read"],
      account: accounts[0],
    };
    instance
      .acquireTokenSilent(request)
      .then((response) => {
        console.log("token response: ", response);
        setAccessToken(response.accessToken);
      })
      .catch((error) => {
        console.log("token response error! ");
        // acquireTokenSilent can fail for a number of reasons, fallback to interaction
        if (error instanceof InteractionRequiredAuthError) {
          instance.acquireTokenPopup(request).then((response) => {
            setAccessToken(response.accessToken);
          });
        }
      });
  }

  return accessToken;
}

// import { InteractionRequiredAuthError } from "@azure/msal-browser";
// import { useMsal } from "@azure/msal-react";

// export async function GetAADToken() {
//   console.log("GetAADToken aufgerufen");
//   const { instance } = useMsal();
//   console.log("GetAADToken instance: ", instance);

//   var request = {
//     scopes: ["User.Read", "openid", "profile"],
//   };

//   await instance
//     .acquireTokenSilent(request)
//     .then((tokenResponse) => {
//       console.log("GetAADToken tokenResponse: ", tokenResponse);
//       return tokenResponse.accessToken;
//     })
//     .catch((error) => {
//       if (error instanceof InteractionRequiredAuthError) {
//         // fallback to interaction when silent call fails
//         console.log("GetAADToken Fehler");
//         return instance.acquireTokenRedirect(request);
//       }
//     });
// }
