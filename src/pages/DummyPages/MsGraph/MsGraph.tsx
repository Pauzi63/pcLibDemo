import {
  AccountInfo,
  InteractionRequiredAuthError,
  InteractionStatus,
  InteractionType,
} from "@azure/msal-browser";
import { GraphData, ProfileData } from "./components/ProfileData";
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";

import Paper from "@material-ui/core/Paper";
import ProfileContent2 from "./components/ProfileContent2";
import { loginRequest } from "../../../p5coreLib/authentication/authConfig";
// import { useCallMsGraph } from "../../../p5coreLib/utils/callMsGraph";

// import useAccessToken from "../../../p5coreLib/utils/useAccessToken";

// Msal imports

// Sample app imports

// Material-ui imports

// export function ProfileContent() {
//   const { instance, inProgress } = useMsal();
//   const [graphData, setGraphData] = useState<null | GraphData>(null);
//   // const [accessToken, setAccessTokcen] = useState<string | null>(null);
//   // const xxx = useAccessToken();

//   // useEffect(() => {
//   //   if (xxx != null) {
//   //     setAccessTokcen(xxx);
//   //   }
//   // }, [xxx]);

//   // const xx = useAccessToken();
//   // console.log("xx: ", xx);

//   // useEffect(() => {
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
//   // }, []); // [inProgress, graphData, instance]);

//   useEffect(() => {
//     console.log("graphdata: ", graphData);
//   }, [graphData]);

//   // useEffect(() => {
//   //   if (accessToken != null) {
//   //     console.log("callMsGraph wird aufgerufen ", accessToken);
//   //   }
//   // }, [accessToken]);

//   return (
//     <Paper>{graphData ? <ProfileData graphData={graphData} /> : null}</Paper>
//   );
// }

export default function MsGraph() {
  // const authRequest = {
  //   ...loginRequest,
  // };

  return <ProfileContent2 />;
}
