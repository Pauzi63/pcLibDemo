import { useMsal } from "@azure/msal-react";
import {
  CompassCalibrationOutlined,
  ContactlessOutlined,
} from "@material-ui/icons";
import React from "react";
import getAccessToken from "../../../../p5coreLib/utils/getAccessToken";

const ProfileContent2 = () => {
  const { instance, inProgress, accounts } = useMsal();
  const [accessToken, setAccessToken] = React.useState<string>("");

  // console.log(
  //   "x: ",
  //   getAccessToken(instance, accounts).then((xx) => {
  //     console.log("xx: ", xx.length);
  //   })
  // );

  async function abc() {
    // setAccessToken("Juhu");
    // setAccessToken(getAccessToken(instance, accounts));
    return await getAccessToken(instance, accounts);
  }

  React.useEffect(() => {
    // setAccessToken(await getAccessToken(instance, accounts));
    // async function franz() {
    //   const xxx = getAccessToken(instance, accounts);
    //   return xxx;
    // }
    // const xyz2 = getAccessToken(instance, accounts);
    // const xyz = franz();
    // console.log("getAccessToken return value: ", xyz);
    // console.log("getAccessToken return value2: ", xyz2);
    // setAccessToken(xxx);
    // const r2 = abc().then((x) => {}).then((aa) => {setAccessToken(aa.length);
    // }});
    // console.log("r2: ", r2);
    // console.log(
    //   "abc: ",
    //   abc().then((a1) => {
    //     console.log("a1: ", a1);
    //   })
    // );
    // abc().then((rr) => {
    //   console.log("rr: ", rr);
    // });
    const x3 = abc();
    const x4 = x3.then((aa) => {
      console.log("aa: ", aa);
    });
    console.log("x3: ", x3);
    console.log("x4: ", x4);
    // console.log("aa: ", aa);
  }, []);

  React.useEffect(() => {
    if (accessToken !== "") {
      console.log("Token ist angekommen: ", accessToken);
    }
  }, [accessToken]);

  return (
    <>
      <div>Na Hallo {accessToken}</div>
      <br />
      <div>Anzahl accounts {accounts.length}</div>
    </>
  );
};

export default ProfileContent2;
