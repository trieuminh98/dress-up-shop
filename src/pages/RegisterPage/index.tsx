import React from 'react';
import { Container } from '@mui/material';
import RegisterForm from './RegisterForm';

function RegisterPage() {
  const onSubmit = (data: any) => {
    console.log('submit', data);
  };

  return (
    <Container maxWidth='lg' sx={{ pt: 4.5 }}>
      <RegisterForm {...{ onSubmit }} />
    </Container>
  );
}

export default RegisterPage;
