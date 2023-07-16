import {
  Typography,
  Box,
  AppBar,
  Toolbar, createTheme, ThemeProvider, Container, Button, Link
}
  from "@mui/material";
import React from "react";
import { AccountCircle } from "@mui/icons-material";
import SiginDialog from "../Account/SiginDialog";
import Auth from "../Account/Auth";

function MenuBar(): JSX.Element {
  const [openSign, setOpenSign] = React.useState(false);
  const pages = ['Home', 'Online Ordering', 'Contact us'];

  const handleSignOpen = () => {
    setOpenSign(true);
  };
  const handleSignClose = () => {
    setOpenSign(false);
  };
  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
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
                >
                  <Link
                  href="/"
                  underline="none"
                  sx={{ color: "white", pr: 8, display: { xs: "none", sm: "block" }, '&:hover': { color: "orange" } }}
                  >
                    {"Home"}
                  </Link>
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                >
                  <Link
                  href="/menu"
                  underline="none"
                  sx={{ color: "white", pr: 8, display: { xs: "none", sm: "block" }, '&:hover': { color: "orange" } }}
                  >
                    {"Menu"}
                  </Link>
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ pr: 8, display: { xs: "none", sm: "block" }, '&:hover': { color: "orange" } }}
                >
                  Contact us
                </Typography>
              </Box>

              <Auth/>

            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
}

export default MenuBar;