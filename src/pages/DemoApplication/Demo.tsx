import React from 'react';
import { Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Routes from '../../routes/routes';
import { createBrowserHistory } from 'history';
import MuiLayout from '../../components/Layout/MuiLayout';
import ApplicationContextService from '../../context/ApplicatonContextService';

const queryClient = new QueryClient();

const Demo = () => {
  const browserHistory = createBrowserHistory();
  return (
    <React.Fragment>
      <ApplicationContextService>
        <QueryClientProvider client={queryClient}>
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

export default Demo;
