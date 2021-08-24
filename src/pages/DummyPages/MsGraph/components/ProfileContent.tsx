import React from "react";
import { useMsal } from "@azure/msal-react";
import { useQuery } from "react-query";
import { Paper } from "@material-ui/core";

import { GraphData, ProfileData } from "./ProfileData";
import { callMsGraphMe } from "../../../../p5coreLib/utils/callMsGraph";
import { getAccessToken } from "../../../../p5coreLib/utils/getAccessToken";
import { AccountInfo, IPublicClientApplication } from "@azure/msal-browser";

const ProfileContent = () => {
  const { instance, accounts } = useMsal();
  const [accessToken, setAccessToken] = React.useState<string>("");
  const [graphData, setGraphData] = React.useState<null | GraphData>(null);

  const graphQuery = useQuery(
    ["GetMsGraph", accessToken],
    async () => callMsGraphMe(accessToken),
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

  return (
    <>
      <Paper>
        {graphQuery.data ? <ProfileData graphData={graphQuery.data} /> : null}
      </Paper>
    </>
  );
};

export default ProfileContent;
