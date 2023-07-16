import { AppBar, createTheme, ThemeProvider, Typography } from '@mui/material';

interface MessageProps {
  message: string
}

function TopMessage(props: MessageProps): JSX.Element {

  const brownTheme = createTheme({
    palette: {
      mode: 'dark'
    },
  });

  return (
    <>
      <ThemeProvider theme={brownTheme}>
        <AppBar position="static" color="primary">
          <Typography
            variant="subtitle2"
            component="div"
            align='center'
          >
            {props.message}
          </Typography>
        </AppBar>
      </ThemeProvider>
    </>
  );
}

export default TopMessage;