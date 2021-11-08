import { Container } from '@mui/material';
import authApi from 'api/authApi';
import CustomizedBreadcrumbs from 'providers/breadscrum';
import React from 'react';
import { useHistory } from 'react-router-dom';
import SignInForm from './SignInForm';

function SignInPage(props: any) {
  const history = useHistory();
  const onSubmit = async (data: any) => {
    console.log('submit', data);
    const userData = await authApi.login(data);
    localStorage.setItem('user', JSON.stringify(userData));
    console.log(userData);
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
