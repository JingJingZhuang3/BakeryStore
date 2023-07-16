import React, { useCallback, useReducer } from 'react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { initialValues } from '../initialValues'
import { reducer, validator } from '../util'

export default function ContactForm() {
  const variant = 'outlined';
  const margin = 'normal';
  const [{ formValues }, dispatch] = useReducer(reducer, {
    activeStep: 0,
    formValues: initialValues
  })
  const { name, email, subject, message } = formValues
  // Check if all values are not empty and if there are some errors
  const isError = useCallback(
    () =>
      Object.keys({ name, email, subject, message }).some(
        (n) => (formValues[n].required && !formValues[n].value) || formValues[n].error
      ),
    [formValues, name, email, subject, message]
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
    <>
      <Box sx={{ my: 5 }}>
        <Typography variant='h4' align='center'>
          Contact Me
        </Typography>
        <Typography variant='subtitle2' align='center' sx={{ mt: 2 }}>
          jzhuang3219@GMAIL.COM / TEL: 987-654-3210
        </Typography>
        <hr />

        <Typography variant='subtitle2' align='center' sx={{ mt: 2 }}>
          Online Ordering Customer Support
        </Typography>
        <Typography variant='subtitle2' align='center' sx={{ mt: 2 }}>
          If you have any questions on your online order, please contact
        </Typography>
        <Typography variant='subtitle2' align='center' sx={{ mt: 2 }}>
          the specific location for assistance.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div className='formLeft'>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              label='Name'
              name='name'
              placeholder='Enter Your Name'
              value={name.value}
              onChange={handleChange}
              error={!!name.error}
              helperText={name.error}
              required={name.required}
            />
            <TextField
              variant={variant}
              margin={margin}
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
              fullWidth
              label='Subject'
              name='subject'
              placeholder='Enter Your Subject'
              type='subject'
              value={subject.value}
              onChange={handleChange}
              error={!!subject.error}
              helperText={subject.error}
              required={subject.required}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* right colum */}
          <div className='formRight'>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              label='Message'
              name='message'
              placeholder='Enter Your Message'
              value={message.value}
              onChange={handleChange}
              error={!!message.error}
              helperText={message.error}
              required={message.required}
              id="outlined-multiline-static"
              multiline
              rows={8}
            />
          </div>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant='contained'
          sx={{ mt: 3, ml: 1 }}
          disabled={isError()}
          color='primary'
          onClick={!isError() ? handleSubmit : () => null}
        >
          submit
        </Button>
      </Box>
    </>
  )
}
