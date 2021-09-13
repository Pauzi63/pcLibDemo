import React from "react";
import axios from "axios";
import { graphConfig } from "../authentication/authConfig";
// import useAccessToken from "./getAccessToken";
import { useQuery } from "react-query";

export async function callMsGraphMe(accessToken: string) {
  console.log("useCallMsGraph aufgerufen");

  const { data } = await axios.get(graphConfig.graphMeEndpoint, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return data;
}

export async function callMsGraphDevices(
  accessToken: string,
  userPrincipalName: string
) {
  console.log("useCallMsGraph userPrincipalName aufgerufen");

  const { data } = await axios.get(
    `https://graph.microsoft.com/v1.0/users/${userPrincipalName}/owneddevices`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );

  return data;
}
