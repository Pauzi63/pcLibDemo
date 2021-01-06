import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import BaustellenListComp from './components/BaustellenListComp';

interface Props {
  path: string;
}

export default function BaustellenListPage(props: Props) {
  const history = useHistory();
  return (
    <div>
      <h1>react-query Baustellenliste</h1>
      <Button
        onClick={() => {
          history.push('/bsttable/addnew');
        }}
      >
        Add new
      </Button>
      <br />
      <br />
      <BaustellenListComp />
    </div>
  );
}
