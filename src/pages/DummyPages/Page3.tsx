import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const Page3 = () => {
  let history = useHistory();
  return (
    <React.Fragment>
      <h2>Page 3</h2>
      <br />
      <br />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => history.goBack()}
      >
        Drück mich
      </Button>
    </React.Fragment>
  );
};

export default Page3;
