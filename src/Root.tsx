import React from "react";
import { Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Routes from "./routes/routes";
import { createBrowserHistory } from "history";
import MuiLayout from "./p5coreLib/commonPages/Layout/MuiLayout";
import ApplicationContextService from "./p5coreLib/context/ApplicatonContextService";

const queryClient = new QueryClient();

const Root = () => {
  const browserHistory = createBrowserHistory();
  return (
    <React.Fragment>
      <ApplicationContextService>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Router history={browserHistory}>
            <MuiLayout>
              <Routes />
            </MuiLayout>
          </Router>
        </QueryClientProvider>
      </ApplicationContextService>
    </React.Fragment>
  );
};

export default Root;
