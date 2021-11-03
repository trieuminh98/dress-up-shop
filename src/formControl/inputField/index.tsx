import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormControl, FormHelperText, OutlinedInput, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import styles from '../styles';

function InputField(props: any) {
  const { form, name, label = '', type, isRequired, ...fieldProps } = props;
  const { inputField, labelStyle, requiredStyle, errorMessage } = styles;

  const {
    control,
    register,
    formState: { errors },
    getValues,
  } = form;

  const getColor = () => {
    if (errors[name]?.message) {
      return '#ff7d7d !important';
    } else if (getValues(name)) {
      return '#69d66f !important';
    } else {
      return '#333 !important';
    }
  };

  const color = getColor();

  useEffect(() => {
    register(name, { required: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormControl fullWidth variant='outlined'>
      <Typography sx={labelStyle} component='label'>
        {label}
        {isRequired && (
          <Typography sx={{ ...requiredStyle, ...{ textTransform: 'uppercase', float: 'right' } }} component='small'>
            Required
          </Typography>
        )}
      </Typography>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <OutlinedInput
            sx={{ ...inputField, ...{ '& > fieldset': { borderColor: color, borderWidth: '1px !important' } } }}
            {...field}
            {...fieldProps}
            type={type}
            fullWidth
            name={name}
            id={name}
          />
        )}
      />
      <FormHelperText sx={errorMessage}>
        {errors[name]?.message && (
          <div>
            <FontAwesomeIcon icon={faTimes} /> {errors[name]?.message}
          </div>
        )}
      </FormHelperText>
    </FormControl>
  );
}

export default InputField;
