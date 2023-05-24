import {
    Typography,
    Box,
    AppBar,
    Toolbar, IconButton, createTheme, ThemeProvider, Grid, Menu, MenuItem, Container, Button, Link
  }
    from "@mui/material";
  import React from "react";
  import { AccountCircle } from "@mui/icons-material";
  import MenuIcon from '@mui/icons-material/Menu';
  
  function MenuBar(): JSX.Element {
  
    const darkTheme = createTheme({
      palette: {
        mode: 'dark',
        primary: {
          main: '#1976d2',
        },
      },
    });
  
  
    return (
      <>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ pr: 8, display: { xs: "none", sm: "block" }, '&:hover': { color: "orange" } }}
                  >
                     Bakery Server
                  </Typography>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </ThemeProvider>
      </>
    );
  }
  
  export default MenuBar;