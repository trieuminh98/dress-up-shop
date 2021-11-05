import { Container } from '@mui/material';
import userApi from 'api/userApi';
import CustomizedBreadcrumbs from 'providers/breadscrum';
import React, { useEffect, useState } from 'react';
import RegisterForm from './RegisterForm';

function RegisterPage() {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isShowAlertCaptcha, setIsShowAlertCaptcha] = useState(false);

  const onSubmit = async (data: any) => {
    if (!isCaptchaVerified) {
      setIsShowAlertCaptcha(true);
      return;
    }
    setIsShowAlertCaptcha(false);
    console.log('submit', data);
    const userData = await userApi.getUser();
    console.log(userData);
  };

  const onVerifyCaptcha = (value: any) => {
    setIsCaptchaVerified(true);
  };

  return (
    <Container maxWidth='lg' sx={{ pt: 4.5 }}>
      <CustomizedBreadcrumbs />
      <RegisterForm {...{ onSubmit, isShowAlertCaptcha, onVerifyCaptcha }} />
    </Container>
  );
}

export default RegisterPage;
