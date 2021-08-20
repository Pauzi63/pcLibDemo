import { useEffect, useState } from "react";

// Msal imports
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import {
  InteractionStatus,
  InteractionType,
  InteractionRequiredAuthError,
  AccountInfo,
} from "@azure/msal-browser";
import { loginRequest } from "../../../p5coreLib/authentication/authConfig";

// Sample app imports
import { ProfileData, GraphData } from "./components/ProfileData";
import LoadingPage from "../../../p5coreLib/commonPages/LoadingPage";
import { ErrorComponent } from "../../../p5coreLib/commonPages/ErrorComponent";
import { callMsGraph } from "../../../p5coreLib/utils/MsGraphApiCall";

// Material-ui imports
import Paper from "@material-ui/core/Paper";
import useAccessToken from "../../../p5coreLib/utils/getAADToken";

const ProfileContent = () => {
  const { instance, inProgress } = useMsal();
  const [graphData, setGraphData] = useState<null | GraphData>(null);
  const [accessToken, setAccessTokcen] = useState<string | null>(null);
  const xxx = useAccessToken();

  useEffect(() => {
    if (xxx != null) {
      setAccessTokcen(xxx);
    }
  }, [xxx]);

  // const xx = useAccessToken();
  // console.log("xx: ", xx);

  useEffect(() => {
    console.log("ProfileContent aufgerufen");
    if (
      !graphData &&
      inProgress === InteractionStatus.None &&
      accessToken != null
    ) {
      callMsGraph(accessToken)
        .then((response) => setGraphData(response))
        .catch((e) => {
          if (e instanceof InteractionRequiredAuthError) {
            instance.acquireTokenRedirect({
              ...loginRequest,
              account: instance.getActiveAccount() as AccountInfo,
            });
          }
        });
    }
  }, [accessToken]); // [inProgress, graphData, instance]);

  useEffect(() => {
    console.log("graphdata: ", graphData);
  }, [graphData]);

  useEffect(() => {
    if (accessToken != null) {
      console.log("callMsGraph wird aufgerufen ", accessToken);
    }
  }, [accessToken]);

  return (
    <Paper>
      {graphData ? (
        <ProfileData graphData={graphData} />
      ) : (
        <h1>Nix gefunden in Graph</h1>
      )}
    </Paper>
  );
};

export default function MsGraph() {
  const authRequest = {
    ...loginRequest,
  };

  return (
    // <MsalAuthenticationTemplate
    //   interactionType={InteractionType.Redirect}
    //   authenticationRequest={authRequest}
    //   errorComponent={ErrorComponent}
    //   loadingComponent={LoadingPage}
    // >
    <ProfileContent />
    // </MsalAuthenticationTemplate>
  );
}
