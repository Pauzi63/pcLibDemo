import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Highlight from '../../components/Highlight';

const useStyles = makeStyles({
  title: {
    marginTop: 24
  }
});

interface IHighlightComp {
  title: string;
  children: any;
}

const HighlightComp = (props: IHighlightComp) => {
  const { title, children } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <p className={classes.title}>{title}</p>
      <Highlight>
        {children}
      </Highlight>
    </React.Fragment>
  );
};

export default HighlightComp;