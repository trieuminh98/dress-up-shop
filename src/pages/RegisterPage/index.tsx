import { Container } from '@mui/material';
import React, { useState } from 'react';
import RegisterForm from './RegisterForm';

function RegisterPage() {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isShowAlertCaptcha, setIsShowAlertCaptcha] = useState(false);

  const onSubmit = (data: any) => {
    if (!isCaptchaVerified) {
      setIsShowAlertCaptcha(true);
      return;
    }
    setIsShowAlertCaptcha(false);
    console.log('submit', data);
  };

  const onVerifyCaptcha = (value: any) => {
    setIsCaptchaVerified(true);
  };

  return (
    <Container maxWidth='lg' sx={{ pt: 4.5 }}>
      <RegisterForm {...{ onSubmit, isShowAlertCaptcha, onVerifyCaptcha }} />
    </Container>
  );
}

export default RegisterPage;
