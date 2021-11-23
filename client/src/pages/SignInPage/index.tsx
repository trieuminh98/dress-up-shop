import { Container } from '@mui/material';
import { unwrapResult } from '@reduxjs/toolkit';
import { AppDispatch } from 'app/store';
import CustomizedBreadcrumbs from 'providers/breadscrum';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginAsync } from 'slice/userSlice';
import SignInForm from './SignInForm';

function SignInPage(props: any) {
  const history = useHistory();
  const [isShowAlert, setIsShowAlert] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const onSubmit = async (data: any) => {
    try {
      const action = loginAsync(data);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      setIsShowAlert(false);
      console.log('user', user);
    } catch (err: any) {
      const { message } = err;
      message && setIsShowAlert(true);
    }
  };

  const handleOnClick = () => {
    history.push('/register');
  };

  return (
    <Container maxWidth='lg' sx={{ pt: 4.5 }}>
      <CustomizedBreadcrumbs />
      <SignInForm {...{ onSubmit, handleOnClick, isShowAlert }} />
    </Container>
  );
}

export default SignInPage;
