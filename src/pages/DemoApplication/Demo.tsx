import React from 'react';
import { Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Routes from '../../routes/routes';
import { createBrowserHistory } from 'history';
import MuiLayout from '../../components/Layout/MuiLayout';

const queryClient = new QueryClient();

const Demo = () => {
  const browserHistory = createBrowserHistory();
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Router history={browserHistory}>
          <MuiLayout>
            <Routes />
          </MuiLayout>
        </Router>
      </QueryClientProvider>
    </React.Fragment>
  );
};

export default Demo;
