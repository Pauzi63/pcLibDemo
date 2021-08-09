import React from "react";
import { useMsal } from "@azure/msal-react";
import { useMutation } from "react-query";
import axios, { AxiosError } from "axios";

import { IKrmCoreLoginPayload } from "../interfaces/Ip5coreLibInterfaces";
import ErrorPage from "../commonPages/ErrorPage";
import LoadingPage from "../commonPages/LoadingPage";
import globals from "../../p5Lib/globals";
import { setToken } from "./tokenstorage";

interface Props {
  children?: React.ReactChild | React.ReactChild[];
}

const KrmCoreLogin = (props: Props) => {
  const { accounts } = useMsal();

  const krmCorLoginPayload: IKrmCoreLoginPayload = {
    networkId: accounts[0].username,
    application: globals.appName,
  };

  // WebApi aufrufen
  async function postAuthentication(payload: IKrmCoreLoginPayload) {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/Authentication`,
      payload
    );
    return response.data;
  }

  const { mutateAsync: mutateAsyncPost, isLoading } = useMutation(
    postAuthentication,
    {
      onSuccess: (data, variables, context) => {
        console.log("KrmCore Token: ", data.token);
        setToken(data.token);
      },
      onError: (error, variables, context) => {
        const axiosError = error as AxiosError;
        <ErrorPage
          code={axiosError.message}
          message={axiosError.response?.statusText}
        />;
      },
      onSettled: (data, error, variables, context) => {},
      retry: 3,
    }
  );

  React.useEffect(() => {
    mutateAsyncPost(krmCorLoginPayload); // KrmCore Anmeldung durchführen
    console.log("KrmCore Login fertig!");
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return <>{props.children}</>;
};

export default KrmCoreLogin;
