// import { loginRequest, graphConfig } from "../authentication/authConfig";
// import { useMsal, useAccount } from "@azure/msal-react";

import React from "react";
import axios from "axios";
import { graphConfig } from "../authentication/authConfig";
// import useAccessToken from "./getAccessToken";
import { useQuery } from "react-query";

export async function callMsGraph(accessToken: string) {
  console.log("useCallMsGraph aufgerufen");

  const { data } = await axios.get(graphConfig.graphMeEndpoint, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return data;
}

// const [accessToken, setAccessToken] = React.useState<string | null>(null);

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

// zuerst Access Token holen
// React.useEffect(() => {
//   setAccessToken(useAccessToken());
// }, []);

// const headers = new Headers();
// const bearer = `Bearer ${accessToken}`;

// headers.append("Authorization", bearer);
// console.log("graph bearer: ", bearer);

// const options = {
//   method: "GET",
//   headers: headers,
// };

// return fetch(graphConfig.graphMeEndpoint, options)
//   .then((response) => response.json())
//   .catch((error) => console.log(error));

// async function fetchMsGraph() {
//   console.log("fetchMsGraph xxx: ", accessToken);
//   const { data } = await axios.get(graphConfig.graphMeEndpoint, {
//     headers: { Authorization: `Bearer ${accessToken}` },
//   });
//   return data;
// }

// return useQuery(["GetMsGraph"], async () => fetchMsGraph(), {
//   retry: 0,
// });

// import axios from "axios";
// import { useQuery } from "react-query";

// const endpoint = `${process.env.REACT_APP_API_URL}`;

// export async function getIsAXIdValid(currentAXProjectId: string) {
//   const { data } = await axios.get(
//     `${endpoint}/AXIsValid/public/${currentAXProjectId}`
//   );
//   return data;
// }
