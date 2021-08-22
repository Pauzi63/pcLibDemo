import { AccountInfo, InteractionRequiredAuthError } from "@azure/msal-browser";
import { GraphData, ProfileData } from "./ProfileData";
import { useEffect, useState } from "react";

import getAccessToken from "../../../../p5coreLib/utils/getAccessToken";
import { Paper } from "@material-ui/core";
import React from "react";
import { loginRequest } from "../../../../p5coreLib/authentication/authConfig";
import { callMsGraph } from "../../../../p5coreLib/utils/callMsGraph";
import { useMsal } from "@azure/msal-react";
import { useQuery } from "react-query";

const ProfileContent = () => {
  const { instance, inProgress, accounts } = useMsal();
  const [graphData, setGraphData] = useState<null | GraphData>(null);
  const [accessToken, setAccessToken] = useState<string>("");

  async function loadData() {
    const xxx = getAccessToken(instance, accounts);
    console.log("loadData1 xxx: ", xxx);
    // setAccessToken(xxx);
    console.log("loadData2 xxx: ", xxx);
  }

  const graphQuery = useQuery(
    ["GetMsGraph", accessToken],
    async () => callMsGraph(accessToken),
    {
      retry: 0,
      enabled: false,
      // onError: () => {
      //   setFieldValue("axIsValid", false);
      // },
      // onSuccess: () => {
      //   setFieldValue("axIsValid", true);
      // },
    }
  );

  React.useEffect(() => {
    if (accessToken != "") {
      graphQuery.refetch();
      setGraphData(graphQuery.data);
    }
  }, [accessToken]);

  React.useEffect(() => {
    loadData();
  }, []);

  // React.useEffect(() => {
  //   console.log("ProfileContent useEffect vor Prüfung: ", accessToken);
  // if (accessToken !== "") {
  // console.log("ProfileContent useEffect nach Prüfung: ", accessToken);
  // const {
  //   data: graphData,
  //   error,
  //   isLoading,
  //   isError,
  // } = useCallMsGraph(accessToken ? accessToken : "");
  // }
  // }, [accessToken]);

  // const [accessToken, setAccessTokcen] = useState<string | null>(null);
  // const xxx = useAccessToken();

  // useEffect(() => {
  //   if (xxx != null) {
  //     setAccessTokcen(xxx);
  //   }
  // }, [xxx]);

  // const xx = useAccessToken();
  // console.log("xx: ", xx);

  // useEffect(() => {
  //   console.log("ProfileContent aufgerufen");
  //   // if (!graphData && inProgress === InteractionStatus.None) {
  //   useCallMsGraph()
  //     .then((response) => setGraphData(response))
  //     .catch((e) => {
  //       if (e instanceof InteractionRequiredAuthError) {
  //         instance.acquireTokenRedirect({
  //           ...loginRequest,
  //           account: instance.getActiveAccount() as AccountInfo,
  //         });
  //       }
  //     });
  //   // }
  // }, []); // [inProgress, graphData, instance]);

  useEffect(() => {
    console.log("graphdata: ", graphData);
  }, [graphData]);

  // useEffect(() => {
  //   if (accessToken != null) {
  //     console.log("callMsGraph wird aufgerufen ", accessToken);
  //   }
  // }, [accessToken]);

  return (
    <Paper>{graphData ? <ProfileData graphData={graphData} /> : null}</Paper>
  );
};

export default ProfileContent;
