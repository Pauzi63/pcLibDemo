import React, {
  Component,
  forwardRef,
  useContext,
  useState,
  useEffect,
} from 'react';
import MaterialTable from 'material-table';
import { AxiosError } from 'axios';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useGetBaustellen } from '../../../hooks/datahooks/useBaustelle';
import { IBaustelle } from '../../../Interfaces/ResponseInterfaces';

export default function BaustellenListComp() {
  const history = useHistory();
  const { data, error, isLoading, isError } = useGetBaustellen();

  console.log('List data: ', data);

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
        title="Baustellen"
        columns={[
          { title: 'Id', field: 'id', hidden: false },
          {
            title: 'Baustelle',
            field: 'baustelle',
            removable: false,
          },
          { title: 'Vorname', field: 'vorname' },
          { title: 'Nachname', field: 'nachname' },
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
          history.push('bsttable/' + rowData?.id);
          // alert(rowData.accountTypeId);
        }}
      />
    </React.Fragment>
  );
}
