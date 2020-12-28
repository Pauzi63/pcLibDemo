import React from 'react';
import BaustellenListComp from './components/BaustellenListComp';

interface Props {
  path: string;
}

export default function BaustellenListPage(props: Props) {
  return (
    <div>
      <h1>react-query Baustellenliste</h1>
      <BaustellenListComp />
    </div>
  );
}
