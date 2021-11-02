import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Grid } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import registerFields from 'common/json/registerField';
import InputField from 'formControl/inputField';
import SelectField from 'formControl/selectField';
import { useForm } from 'react-hook-form';

function RegisterForm(props: any) {
  const { onSubmit } = props;

  const schema = yup.object().shape({
    email: yup.string().email('You must enter a valid email').required('You must enter a valid email.'),
    password: yup.string().required('You must enter a password.'),
    retypePassword: yup.string().required('You must enter a password.'),
    birthMonth: yup.number().moreThan(0, 'The "Birth Month" field cannot be blank.')
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
      retypePassword: '',
      birthMonth: 0
    },
  });

  const { handleSubmit } = form;

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1, ml: 5, mr: 5 }}>
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
      <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
        Submit
      </Button>
    </Box>
  );
}

export default RegisterForm;
