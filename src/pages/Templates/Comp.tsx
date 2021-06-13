import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    marginTop: 36
  }
});

interface ICompProps {
  title: string;
  children: any;
}

const Comp = (props: ICompProps) => {
  const { title, children } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <h2 className={classes.title}>{title}</h2>
      {children}
    </React.Fragment>
  );
};

export default Comp;