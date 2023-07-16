import { useCallback, useContext, useReducer } from 'react'
import Dialog from '@mui/material/Dialog';
import { Box, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import Google from "../../img/googleIcon.png";
import Facebook from "../../img/facebookIcon.png";
import { initialValues } from '../initialValues';
import { reducer, validator } from '../util';

interface SiginDialogProps {
  open: boolean;
  onClose: () => void;
}


export default function SiginDialog(props: SiginDialogProps) {

  const { onClose, open } = props;
  const variant = 'outlined';
  const margin = 'dense';

  const handleClose = () => {
    onClose();
  };
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
  // Check if all values are not empty and if there are some errors
  const isError = useCallback(
    () =>
      Object.keys({ email, password }).some(
        (n) => (formValues[n].required && !formValues[n].value) || formValues[n].error
      ),
    [formValues, email, password]
  )
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
  // Handle form change
  const handleSubmit = useCallback(() => {
    console.log("submit for message!!!")
  },
    []
  )


  return (
    <Dialog onClose={handleClose} open={open}>
      {/* <Container component='main' maxWidth='sm' sx={{ mb: 4 }}> */}
      <Paper variant='outlined' sx={{ border: 'none', mx: { xs: 3, md: 6 }, my: { xs: 3, md: 6 } }}>
        <Box>
          <Box >
            <Typography variant='h4' align='center'>
              Sign Up
            </Typography>
            <Typography variant='subtitle1' align='center' sx={{ mt: 2 }}>
              {"Already a member? "}
              <Link
                underline="hover"
                color="primary"
                href="/"
              >
                Log In
              </Link>
            </Typography>
          </Box>

          {/* form */}
          <Box sx={{ display: 'flex', mt: 3 }}>
            <Link
              href="/oauth2/authorization/google"
            >
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
                  Sign Up with Google
                </Typography>
              </Button>
            </Link>
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
                Sign Up with Facebook
              </Typography>
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

          <Box sx={{ display: 'flex', mt: 3 }}>
            <Button
              variant='outlined'
              sx={{ width: '100%', height: '60px' }}
              color='primary'
              disabled={isError()}
              onClick={!isError() ? handleSubmit : () => null}
            >
              Sign up with Email
            </Button>
          </Box>
        </Box>
      </Paper>
    </Dialog>
  );
}