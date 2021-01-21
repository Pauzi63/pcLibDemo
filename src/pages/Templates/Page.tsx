import React from 'react';

interface IPageProps {
  title: string;
  children: any;
}

const Page = (props: IPageProps) => {
  const { title, children } = props;
  
  return (
    <React.Fragment>
      <h1>{title}</h1>
      {children}
    </React.Fragment>
  );
};

export default Page;