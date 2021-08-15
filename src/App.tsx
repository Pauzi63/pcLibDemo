import AADLogin from "./p5coreLib/authentication/AADLogin";
import ApplicationTheme from "./p5coreLib/context/ApplicationTheme";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./p5coreLib/commonPages/Fallback";
import { IPublicClientApplication } from "@azure/msal-browser";
import Localization from "./p5coreLib/utils/localization";
import { MsalProvider } from "@azure/msal-react";
import Root from "./Root";
import SnackbarProvider from "./p5coreLib/components/SnackbarProvider";

// import MsalAuthentication from "./p5coreLib/authentication/MsalAuthentication";

// MSAL imports

interface FallbackProps {
  error: Error;
  resetErrorBoundary: (...args: Array<unknown>) => void;
}

function ErrorFallback(error: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.error.message}</pre>
    </div>
  );
}

type AppProps = {
  pca: IPublicClientApplication;
};

function App({ pca }: AppProps) {
  Localization.initialize();
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <MsalProvider instance={pca}>
        <ApplicationTheme>
          <SnackbarProvider>
            <AADLogin>
              <Root />
            </AADLogin>
          </SnackbarProvider>
        </ApplicationTheme>
      </MsalProvider>
    </ErrorBoundary>
  );
}

export default App;
