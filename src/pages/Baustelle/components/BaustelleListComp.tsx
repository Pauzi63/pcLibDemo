import React from "react";
import MaterialTable from "material-table";
import { useHistory } from "react-router-dom";
import { IBaustelle } from "../../../interfaces/responseInterfaces";

interface Props {
  data: any;
}

const BaustelleListComp = (props: Props) => {
  const { data } = props;
  const history = useHistory();

  return (
    <React.Fragment>
      <MaterialTable
        title="Baustellen"
        columns={[
          { title: "Id", field: "id", type: "numeric", hidden: false },
          {
            title: "Baustelle",
            field: "baustelle",
            removable: false,
            type: "string",
          },
          { title: "Vorname", field: "vorname", type: "string" },
          { title: "Nachname", field: "nachname", type: "string" },
          { title: "Ort", field: "ort", type: "string" },
        ]}
        data={data}
        options={{
          filtering: true,
          emptyRowsWhenPaging: false,
          selection: false,
          columnsButton: true,
          exportButton: true,
          detailPanelType: "single",
          toolbar: true,
        }}
        onRowClick={(event, rowData) => {
          history.push(`/baustelle/edit/${rowData?.id}`);
        }}
      />
    </React.Fragment>
  );
};

export default BaustelleListComp;
