import React from 'react';
import MaterialTable from 'material-table';
import { AxiosError } from 'axios';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useGetBaustellen } from '../../../hooks/datahooks/useBaustelle';

export default function BaustellenListComp() {
  const history = useHistory();
  const { data, error, isLoading, isError } = useGetBaustellen();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    const axiosError = error as AxiosError;
    if (error && typeof error == 'object') {
      return (
        <div>
          Es ist ein Fehler aufgetreten: {axiosError.response?.statusText}{' '}
          {axiosError.message}
        </div>
      );
    }
  }

  return (
    <React.Fragment>
      <MaterialTable
        title="Baustellen"
        columns={[
          { title: 'Id', field: 'id', type: 'numeric', hidden: false },
          {
            title: 'Baustelle',
            field: 'baustelle',
            removable: false,
            type: 'string',
          },
          { title: 'Vorname', field: 'vorname', type: 'string' },
          { title: 'Nachname', field: 'nachname', type: 'string' },
          { title: 'Ort', field: 'ort', type: 'string' },
        ]}
        data={data}
        options={{
          filtering: true,
          emptyRowsWhenPaging: false,
          selection: false,
          columnsButton: true,
          exportButton: true,
          detailPanelType: 'single',
          toolbar: true,
        }}
        onRowClick={(event, rowData) => {
          console.log('RowData ', rowData);
          console.log('Event ', event);
          history.push('bsttable/edit/' + rowData?.id);
          // alert(rowData.accountTypeId);
        }}
      />
    </React.Fragment>
  );
}
