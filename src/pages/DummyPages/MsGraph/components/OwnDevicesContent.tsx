import React from "react";
import { useMsal } from "@azure/msal-react";
import { useQuery } from "react-query";
import { Paper } from "@material-ui/core";

import { GraphData, ProfileData } from "./ProfileData";
import { callMsGraphDevices } from "../../../../p5coreLib/utils/callMsGraph";
import { getAccessToken } from "../../../../p5coreLib/utils/getAccessToken";
import { AccountInfo, IPublicClientApplication } from "@azure/msal-browser";

const OwnDevicesContent = () => {
  const { instance, inProgress, accounts } = useMsal();
  const [accessToken, setAccessToken] = React.useState<string>("");
  const [graphData, setGraphData] = React.useState<null | GraphData>(null);
  const [xx, setXx] = React.useState<string>();

  const graphQuery = useQuery(
    ["GetMsGraphDevices", accessToken],
    async () =>
      callMsGraphDevices(
        accessToken,
        "christian.pauzenberger@kremsmueller.com"
      ),
    {
      retry: 0,
      enabled: false,
    }
  );

  React.useEffect(() => {
    async function getToken(
      instance: IPublicClientApplication,
      accounts: AccountInfo[]
    ) {
      const token = await getAccessToken(instance, accounts);
      console.log("token: ", token);
      setAccessToken(token);
    }
    getToken(instance, accounts);
  }, []);

  React.useEffect(() => {
    if (accessToken !== "") {
      console.log("Token ist angekommen: ", accessToken);
      graphQuery.refetch();
    }
  }, [accessToken]);

  React.useEffect(() => {
    if (graphQuery.data !== null) {
      setXx(JSON.stringify(graphQuery.data));
    }
  }, [graphQuery.data]);

  return (
    <>
      <Paper>{graphQuery.data ? <div>{xx}</div> : null}</Paper>
    </>
  );
};

export default OwnDevicesContent;
