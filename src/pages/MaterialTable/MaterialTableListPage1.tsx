import React from 'react';
import MaterialTableListComp1 from './components/MaterialTableListComp1';

interface Props {
  path: string;
}

export default function MaterialTableListPage1(props: Props) {
  return (
    <div>
      <h1>react-query Liste</h1>
      <MaterialTableListComp1 />
    </div>
  );
}
