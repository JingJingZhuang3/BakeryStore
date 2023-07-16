import { AppBar, Box, createTheme, ThemeProvider, Typography } from '@mui/material';

function IndexHeaderTopInfo(): JSX.Element {

  const brownTheme = createTheme({
    palette: {
      primary: {
        main: 'rgb(79,33,28)',
      },
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
          {"Super Deal! Free Shipping on Orders Over $50. Shipping Only available in Pflugerville, TX"}
        </Typography>
        <Typography
          variant="subtitle2"
          component="div"
          align='center'
        >
           {"Pick up only on Weekends, feel free to book your first PICK UP!"}
        </Typography>
      </AppBar>
      </ThemeProvider>
    </>
  );
}

export default IndexHeaderTopInfo;