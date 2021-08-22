import { QueryClient, QueryClientProvider } from "react-query";

import ApplicationContextService from "./p5coreLib/context/ApplicatonContextService";
import KrmCoreLogin from "./p5coreLib/authentication/KrmCoreLogin";
import MuiLayout from "./p5coreLib/commonPages/Layout/MuiLayout";
import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { Router } from "react-router-dom";
import Routes from "./routes/routes";
import { createBrowserHistory } from "history";

const queryClient = new QueryClient();

const Root = () => {
  const browserHistory = createBrowserHistory();
  // const navigationClient = new CustomNavigationClient(history);
  // pca.setNavigationClient(navigationClient);

  return (
    <React.Fragment>
      <ApplicationContextService>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          {/* <KrmCoreLogin> */}
          <Router history={browserHistory}>
            <MuiLayout>
              <Routes />
            </MuiLayout>
          </Router>
          {/* </KrmCoreLogin> */}
        </QueryClientProvider>
      </ApplicationContextService>
    </React.Fragment>
  );
};

export default Root;
