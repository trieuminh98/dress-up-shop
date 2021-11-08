import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Box, Grid } from '@mui/material';
import registerFields from 'common/json/registerField';
import InputField from 'formControl/inputField';
import SelectField from 'formControl/selectField';
import CustomizedButtons from 'providers/Button';
import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import styles from './styles';

function RegisterForm(props: any) {
  const { onSubmit, isShowAlertCaptcha, onVerifyCaptcha } = props;
  const { styledForm, alert } = styles;

  const schema = yup.object().shape({
    email: yup.string().email('You must enter a valid email').required('You must enter a valid email.'),
    password: yup
      .string()
      .required('You must enter a password.')
      .min(7, 'Passwords must be at least 7 characters and contain both alphabetic and numeric characters.')
      .test('alphabets', 'Name must only contain alphabets', (value = '') => {
        console.log('alphabets', /^(?=.*\b(?=\S*[a-zA-Z])(?=\S*[0-9]))/.test(value), value);
        return /^(?=.*\b(?=\S*[a-zA-Z])(?=\S*[0-9]))/.test(value);
      }),
    retypePassword: yup
      .string()
      .required('You must enter a password.')
      .oneOf([yup.ref('password')], 'Your passwords do not match.'),
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
        <Alert sx={alert} severity='error'>
          The captcha you entered is incorrect. Please try again.
        </Alert>
      )}
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {registerFields.map(({ name, label, isRequired, type, isSelectBox, menuItems = [] }, index) => (
          <Grid item xs={4} sm={8} md={6} key={index}>
            {isSelectBox ? (
              <SelectField {...{ form, name, label, isRequired, menuItems }} {...{ form }} />
            ) : (
              <InputField {...{ form, name, label, isRequired, type }} />
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
