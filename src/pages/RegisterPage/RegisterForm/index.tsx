import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert, Box, Button, Grid } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import registerFields from 'common/json/registerField';
import InputField from 'formControl/inputField';
import SelectField from 'formControl/selectField';
import { useForm } from 'react-hook-form';
import CustomizedButtons from 'providers/buttons';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './styles';

function RegisterForm(props: any) {
  const { onSubmit, isShowAlertCaptcha, onVerifyCaptcha } = props;
  const { styledForm } = styles;

  const schema = yup.object().shape({
    email: yup.string().email('You must enter a valid email').required('You must enter a valid email.'),
    password: yup.string().required('You must enter a password.'),
    retypePassword: yup.string().required('You must enter a password.'),
    birthMonth: yup.number().moreThan(0, 'The "Birth Month" field cannot be blank.'),
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
      retypePassword: '',
      birthMonth: 0,
    },
  });

  const onChange = (value: any) => {
    onVerifyCaptcha(value);
  };

  const { handleSubmit } = form;

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate sx={styledForm}>
      {isShowAlertCaptcha && (
        <Alert sx={{ m: '15px 0', backgroundColor: '#fdd', color: '#333' }} severity='error'>
          The captcha you entered is incorrect. Please try again.
        </Alert>
      )}
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {registerFields.map(({ name, label, isRequired, type, isSelectBox, menuItems = [] }, index) => (
          <Grid item xs={4} sm={8} md={6} key={index}>
            {isSelectBox ? (
              <SelectField {...{ form, name, label, isRequired, menuItems }} {...{ form }} />
            ) : (
              <InputField autoFocus placeholder='e.g. Kelly' {...{ form, name, label, isRequired, type }} />
            )}
          </Grid>
        ))}
      </Grid>
      <div style={{ margin: '15px 0' }}>
        <ReCAPTCHA sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' onChange={onChange} />
      </div>
      <CustomizedButtons content='CREATE ACCOUNT' type='submit' variant='contained' sx={{ display: 'grid', m: '30px auto' }} />
    </Box>
  );
}

export default RegisterForm;
