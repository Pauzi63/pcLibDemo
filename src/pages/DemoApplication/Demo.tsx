import React from 'react';
import { Router } from 'react-router-dom';
import Routes from '../../routes/routes';
import { createBrowserHistory } from 'history';
import MuiLayout from '../../components/Layout/MuiLayout';

const Demo = () => {
  const browserHistory = createBrowserHistory();
  return (
    <React.Fragment>
      <Router history={browserHistory}>
        <MuiLayout>
          <Routes />
        </MuiLayout>
      </Router>
    </React.Fragment>
  );
};

export default Demo;
