import React from "react";
import { useMsal } from "@azure/msal-react";
import { useQuery } from "react-query";
import { Paper } from "@material-ui/core";

import { GraphData, ProfileData } from "./ProfileData";
import { callMsGraphDevices } from "../../../../p5coreLib/utils/callMsGraph";
import { getAccessToken } from "../../../../p5coreLib/utils/getAccessToken";

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
    getAccessToken(instance, accounts).then((tok) => {
      setAccessToken(tok);
    });
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
      <div>Na Hallo {accessToken}</div>
      <br />
      <div>Anzahl accounts {accounts.length}</div>
      <br />
      Franzi
      <br />
      <Paper>{graphQuery.data ? <div>{xx}</div> : null}</Paper>
    </>
  );
};

export default OwnDevicesContent;
