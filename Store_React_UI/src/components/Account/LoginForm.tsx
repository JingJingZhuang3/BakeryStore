// import { Google, Facebook } from "@mui/icons-material";
import { Paper, Box, Typography, TextField, Grid, Link, Button } from "@mui/material";
import { useReducer, useCallback } from "react";
import { initialValues } from "../initialValues";
import { reducer, validator } from "../util";
import Google from "../../img/googleIcon.png";
import Facebook from "../../img/facebookIcon.png";

interface LoginFormProps {
  isLogin: boolean;
}

function LoginForm(props: LoginFormProps): JSX.Element {
  const { isLogin } = props;
  const variant = 'outlined';
  const margin = 'dense';

  const google = () => {
    window.open("http://localhost:5000/oauth2/authorization/google", "_self");
  };
  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  const [{ formValues }, dispatch] = useReducer(reducer, {
    activeStep: 0,
    formValues: initialValues
  })
  const { email, password } = formValues

  // Handle form change
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, checked?: boolean) => {

      const { name, value } = event.target
      dispatch({ type: 'form-value', name, fieldValue: value })
      const fieldName = initialValues[name]
      if (!fieldName) return
      const error = validator(fieldName, value, checked);
      dispatch({ type: 'form-error', name, error })
    },
    []
  )
  return (
    <>
      <Paper variant='outlined'
        sx={{ border: 'none', boxShadow: 'none' }}
      >

        <Grid container spacing={0}
        >
          <Grid
            item
            sx={{ mx: "30px" }}
          >

            <Box >
              <Typography variant='h4' align='center'>
                {isLogin ? "Sign In" : "Sign Up"}
              </Typography>
              {!isLogin &&
                <>
                  <Typography variant='subtitle1' align='center' sx={{ mt: 2 }}>
                    {"Already a member? "}
                    <Link
                      underline="hover"
                      color="primary"
                      href="/login"
                    >
                      Log In
                    </Link>
                  </Typography>
                </>
              }
            </Box>

            <Grid container spacing={0}>
              <TextField
                variant={variant}
                margin={margin}
                sx={{ mt: 3 }}
                fullWidth
                label='Email'
                name='email'
                placeholder='Enter Your Email'
                type='email'
                value={email.value}
                onChange={handleChange}
                error={!!email.error}
                helperText={email.error}
                required={email.required}
              />
              <TextField
                variant={variant}
                margin={margin}
                sx={{ mt: 3 }}
                fullWidth
                label='Password'
                name='password'
                placeholder='Enter Your Password'
                type='password'
                value={password.value}
                onChange={handleChange}
                error={!!password.error}
                helperText={password.error}
                required={password.required}
              />
            </Grid>

            <Box sx={{ display: 'flex', my: 3 }}>
              <Button
                variant='outlined'
                sx={{ width: '100%', height: '60px' }}
                color='primary'
              // disabled={isError()}
              // onClick={!isError() ? handleSubmit : () => null}
              >
                {isLogin ? "Sign in with Email" : "Sign up with Email"}
              </Button>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={5}>
                <hr />
              </Grid>
              <Grid item xs={2}>
                <Typography variant='subtitle2' align='center'>
                  Or
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <hr />
              </Grid>
            </Grid>

            {/* form */}
            <Box sx={{ display: 'flex', mt: 3 }}>
              {/* <Link
                  href="/oauth2/authorization/google"
                > */}
              <Button
                variant='contained'
                sx={{ width: '100%', height: '60px' }}
                color='error'
                onClick={google}
              >
                <div className="icon" >
                  <img src={Google} alt="" />
                </div>
                <Typography variant='subtitle1' align='center' sx={{ ml: 2, color: 'white' }}>
                  {isLogin ? "Sign In with Google" : "Sign Up with Google"}
                </Typography>
              </Button>
              {/* </Link> */}
            </Box>
            <Box sx={{ display: 'flex', mt: 3, mb: 3 }}>
              <Button
                variant='contained'
                sx={{ width: '100%', height: '60px' }}
                color='primary'
                onClick={facebook}
              >
                <div className="icon" >
                  <img src={Facebook} alt="" />
                </div>
                <Typography variant='subtitle1' align='center' sx={{ ml: 2, color: 'white' }}>
                  {isLogin ? "Sign In with Facebook" : "Sign Up with Facebook"}
                </Typography>
              </Button>
            </Box>

          </Grid>
        </Grid>
      </Paper>

    </>
  );
}

export default LoginForm;