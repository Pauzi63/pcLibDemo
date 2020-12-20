import { makeStyles } from '@material-ui/core/styles';

import useThemes from './useThemes';

const createStyles = makeStyles((theme) => ({
  root: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1600 + theme.spacing(2) * 2)]: {
      width: 1600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    color: theme.palette.text.primary,
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      padding: theme.spacing(3),
    },
  },
}));

const useStyles = () => {
  const theme = useThemes();
  return createStyles(theme);
};

export default useStyles;
