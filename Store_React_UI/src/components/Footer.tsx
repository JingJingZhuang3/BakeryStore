import {createTheme, ThemeProvider, Typography } from '@mui/material';

function Footer(): JSX.Element {

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
        <Typography
          variant="subtitle2"
          component="div"
          align='center'
        >
          {"©2023 by Bakery store."}
        </Typography>
      </ThemeProvider>
    </>
  );
}

export default Footer;