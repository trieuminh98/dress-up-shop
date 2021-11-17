import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Box, Grid, Typography } from '@mui/material';
import InputField from 'formControl/inputField';
import CustomizedButtons from 'providers/Button';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

function SignInForm(props: any) {
  const { onSubmit, handleOnClick, isShowAlert } = props;
  const schema = yup.object().shape({
    email: yup.string().email('You must enter a valid email').required('You must enter a valid email.'),
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { handleSubmit } = form;

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 13, ml: 5, mr: 5 }}>
      <Grid container spacing={0} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={8} md={6} sx={{ m: 'auto', pl: 10 }}>
          {isShowAlert && (
            <Alert sx={{ m: '0 30px', backgroundColor: '#fdd', color: '#333'}} severity='error'>
              Your email address or password is incorrect. Please try again. If you've forgotten your sign in details, just click the 'Forgot your
              password?' link below.
            </Alert>
          )}
          <Box sx={{ m: 4 }}>
            <InputField name='email' label='Email Address:' isRequired={false} type='email' {...{ form }} />
          </Box>
          <Box sx={{ m: 4 }}>
            <InputField name='password' label='Password:' isRequired={false} type='password' {...{ form }} />
          </Box>
          <Box sx={{ ml: 13 }}>
            <CustomizedButtons content='SIGN IN' type='submit' variant='contained' />
            <Link style={{ textDecoration: 'underline', display: 'inline-block' }} to='/register'>
              <Typography sx={{ margin: '10px', fontSize: '0.8rem' }}>Forgot your passwrod?</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={4} sm={8} md={6}>
          <Box sx={{ p: '10px 20px', border: '1px solid #999', mr: 12 }}>
            <Box sx={{ m: 1, backgroundColor: '#e5e5e5', p: 4 }}>
              <Box sx={{ fontSize: '14px' }}>New Customer?</Box>
              <Box sx={{ fontSize: '0.8rem' }}>Create an account with us and you'll be able to:</Box>
              <ul style={{ fontSize: '0.8rem' }}>
                <li>Check out faster</li>
                <li>Save multiple shipping addresses</li>
                <li>Access your order history</li>
                <li>Track new orders</li>
                <li>Save items to your Wish List</li>
              </ul>
              <CustomizedButtons content='CREATE ACCOUNT' onClick={handleOnClick} variant='contained' />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SignInForm;
