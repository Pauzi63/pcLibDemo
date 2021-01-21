import { SnackbarProvider as MuiSnackbarProvider } from 'notistack';

const SnackbarProvider = (props: { children: any; }) => {
  const { children } = props;

  return (
    <MuiSnackbarProvider maxSnack={3} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
      {children}
    </MuiSnackbarProvider>
  );
}

export default SnackbarProvider;