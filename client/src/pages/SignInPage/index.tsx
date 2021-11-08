import React from 'react';
import PropTypes from 'prop-types';
import CustomizedBreadcrumbs from 'providers/breadscrum';
import { Container } from '@mui/material';
import SignInForm from './SignInForm';
import { useHistory } from 'react-router-dom';

function SignInPage(props: any) {
  const history = useHistory();
  const onSubmit = async (data: any) => {
    console.log('submit');
  };

  const handleOnClick = () => {
    history.push('/register')
  };

  return (
    <Container maxWidth='lg' sx={{ pt: 4.5 }}>
      <CustomizedBreadcrumbs />
      <SignInForm {...{ onSubmit, handleOnClick }} />
    </Container>
  );
}

export default SignInPage;
