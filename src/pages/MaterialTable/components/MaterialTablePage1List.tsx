import React, { Component, forwardRef, useContext } from 'react';
import MaterialTable from 'material-table';
import { AxiosError } from 'axios';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useGetToDos } from '../../../hooks/datahooks/useDoTo';

export default function MaterialTablePage1List() {
  const history = useHistory();
  const { data, error, isLoading, isError } = useGetToDos();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    const axiosError = error as AxiosError;
    if (error && typeof error == 'object') {
      return (
        <div>
          Es ist ein Fehler aufgetreten: {axiosError.response?.statusText}{' '}
        </div>
      );
    }
  }

  return (
    <React.Fragment>
      <MaterialTable
        title="Remote Data Preview"
        columns={[
          { title: 'UserId', field: 'userId', hidden: false },
          {
            title: 'Id',
            field: 'id',
            removable: false,
          },
          { title: 'Title', field: 'title' },
          { title: 'Completed', field: 'completed', type: 'boolean' },
        ]}
        // columns={xcolumns}
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
          history.push('muitable1/' + rowData?.id);
          // alert(rowData.accountTypeId);
        }}
      />
    </React.Fragment>
  );
}
