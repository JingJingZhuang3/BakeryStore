
import { Grid, Paper } from "@mui/material";
import LoginForm from "./LoginForm";
import SideLogo from "./SideLogo";


function Login(): JSX.Element {


  return (
    <>
      <Paper sx={{border: 'none', boxShadow:'none', my: 30 }} >
        <Grid container spacing={3} sx={{border: 'none'}}>
          <Grid item xs={12} sm={6}>
            <SideLogo />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LoginForm isLogin={true} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default Login;