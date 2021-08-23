import React from "react";
import { useMsal } from "@azure/msal-react";
import { useQuery } from "react-query";
import { Paper } from "@material-ui/core";

import { GraphData, ProfileData } from "./ProfileData";
import { callMsGraph } from "../../../../p5coreLib/utils/callMsGraph";
import { getAccessToken } from "../../../../p5coreLib/utils/getAccessToken";

const ProfileContent2 = () => {
  const { instance, inProgress, accounts } = useMsal();
  const [accessToken, setAccessToken] = React.useState<string>("");
  const [graphData, setGraphData] = React.useState<null | GraphData>(null);

  const graphQuery = useQuery(
    ["GetMsGraph", accessToken],
    async () => callMsGraph(accessToken),
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
      setGraphData(graphQuery.data);
    }
  }, [accessToken]);

  return (
    <>
      <div>Na Hallo {accessToken}</div>
      <br />
      <div>Anzahl accounts {accounts.length}</div>
      <br />
      <Paper>{graphData ? <ProfileData graphData={graphData} /> : null}</Paper>
      );
    </>
  );
};

export default ProfileContent2;
