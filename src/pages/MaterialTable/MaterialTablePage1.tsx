import React from 'react';
import MaterialTablePage1List from './components/MaterialTablePage1List';

interface Props {
  path: string;
}

export default function MaterialTablePage1(props: Props) {
  return (
    <div>
      <h1>react-query Liste</h1>
      <MaterialTablePage1List />
    </div>
  );
}
