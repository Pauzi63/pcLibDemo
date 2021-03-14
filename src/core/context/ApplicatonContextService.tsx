import * as React from 'react';
import { ApplicationContext } from './ApplicationContext';

function ApplicationContextService(props: any) {
  const [messageCount, setMessageCount] = React.useState(0);

  return (
    <ApplicationContext.Provider
      value={{
        messageCount,
        setMessageCount,
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationContextService;
