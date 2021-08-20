// import { loginRequest, graphConfig } from "../authentication/authConfig";
// import { useMsal, useAccount } from "@azure/msal-react";
import { graphConfig } from "../authentication/authConfig";

export function callMsGraph(accessToken: string) {
  console.log("CallMsGraph aufgerufen");
  // console.log("CallMsGraph useAccount: ", useAccount);

  // const { instance, accounts, inProgress } = useMsal();
  // console.log("CallMsGraph instance: ", instance);
  // console.log("CallMsGraph accounts: ", accounts);
  // const account = accounts[0]; //instance.getActiveAccount();
  // //   const { username } = useAccount(account);
  // console.log("CallMsGraph account: ", account);

  // if (!account) {
  //   console.log(
  //     "No active account! Verify a user has been signed in and setActiveAccount has been called."
  //   );
  //   throw Error(
  //     "No active account! Verify a user has been signed in and setActiveAccount has been called."
  //   );
  // }

  // const response = instance.acquireTokenSilent({
  //   ...loginRequest,
  //   account: account,
  // });

  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);
  console.log("graph bearer: ", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(graphConfig.graphMeEndpoint, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
