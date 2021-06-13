// https://docs.microsoft.com/en-us/graph/toolkit/get-started/mgt-react
import React from "react";
import { Person } from "@microsoft/mgt-react";
import { MgtTemplateProps } from "@microsoft/mgt-react";

const MsGraph = () => {
  const personDetails = {
    displayName: "Pauzenberger Christian",
  };

  return (
    <React.Fragment>
      <h2>Juhu</h2>
      <Person personQuery="me" person-card="hover" />
      <br />
      <br />
      <Person personDetails={personDetails} />
    </React.Fragment>
  );
};

export default MsGraph;
