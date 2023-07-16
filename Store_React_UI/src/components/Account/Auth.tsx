import {
  Typography,
  Box,
  Button
}
  from "@mui/material";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
interface Props {
  // authenticated: boolean;
  // currentUser: any;
  // loading: boolean;
}

// function Auth(): JSX.Element {
const Auth: React.FC<Props> = () => {

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  // const [openSign, setOpenSign] = React.useState(false);
  // const normalTheme = createTheme({
  //   palette: {
  //     primary: {
  //       main: '#0052cc',
  //     },
  //   },
  // });
  // const handleSignOpen = () => {
  //   setOpenSign(true);
  // };
  // const handleSignClose = () => {
  //   setOpenSign(false);
  // };
  // const handleLogout = () => {
  //   localStorage.removeItem(ACCESS_TOKEN);
  //   // this.setState({
  //   //   authenticated: false,
  //   //   currentUser: null
  //   // });
  //   console.log("You're safely logged out!");
  // };


  return (
    <>
      {/* use Auth0 */}
      {/* {isAuthenticated && user && (
        <>
          <Box
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              component="img"
              sx={{ mr: 2, height: 30 }}
              src={user?.picture}
            />
            <Typography variant="h6" sx={{ mr: 2 }}>
              {user.name}
            </Typography>

            <Button
              onClick={() => logout()}
              color="inherit"
              sx={{ mr: 2 }}
            >
              <Typography variant="h6">
                Log Out
              </Typography>
            </Button>

          </Box>
        </>

      )}
      {!isAuthenticated && (
        <Box>
          <Button
            onClick={loginWithRedirect}
            color="inherit"
          >
            <AccountCircle sx={{ mr: 2 }} />
            <Typography variant="h6">
              Sign In
            </Typography>
          </Button>

        </Box>
      )} */}


      {isAuthenticated && user && (
        <>
          <Box
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              component="img"
              sx={{ mr: 2, height: 30 }}
              src={user?.picture}
            />
            <Typography variant="h6" sx={{ mr: 2 }}>
              {user.name}
            </Typography>

            <Button
              onClick={() => logout()}
              color="inherit"
              sx={{ mr: 2 }}
            >
              <Typography variant="h6">
                Log Out
              </Typography>
            </Button>

          </Box>
        </>

      )}
      {!isAuthenticated && (
        <Box
          sx={{
            textAlign: "center",
            alignContent: "center"
          }}
        >
          <Button
            onClick={loginWithRedirect}
            color="inherit"
            sx={{ mr: 2 }}
          >
            <Typography variant="subtitle1">
              Log In
            </Typography>
          </Button>

          <Button
            onClick={loginWithRedirect}
            color="primary"
            variant="contained"
          >
            <Typography variant="subtitle1">
              Sign Up
            </Typography>
          </Button>
        </Box>
      )}
    </>
  );
}

export default Auth;