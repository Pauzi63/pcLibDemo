import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { ApplicationContext } from '../../context/ApplicationContext';

const Page2 = () => {
  const { messageCount, setMessageCount } = React.useContext(
    ApplicationContext
  );
  return (
    <React.Fragment>
      <h2>Das ist die 1. Zeile der Page 2</h2>
      <h2>Page 2</h2>
      <h2>Page 2</h2>
      <h2>
        Page 2 Page 2Page 2Page 2Page 2Page 2Page 2Page 2Page 2Page 2Page 2Page
        2Page 2Page 2Page 2
      </h2>
      <h2>Page 2</h2>
      <h2>Page 2</h2>
      <h2>Page 2</h2>
      <br />
      <br />
      <br />
      Anzahl Nachrichten: {messageCount}
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setMessageCount(messageCount - 1)}
      >
        Nachricht löschen
      </Button>
    </React.Fragment>
  );
};

export default Page2;
