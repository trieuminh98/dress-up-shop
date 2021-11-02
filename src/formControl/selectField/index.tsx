import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormControl, FormHelperText, InputBase, MenuItem, Select, styled, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import styles from '../styles';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 0,
    color: '#666',
    height: '2.5em !important',
    lineHeight: '2.5em',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #333',
    fontSize: '0.8em',
    padding: '0 26px 0 12px',
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 0,
    },
  },
}));

const useStyles = makeStyles(() => ({
  dropdownStyle: {
    '& > ul': {
      '& > li': {
        fontSize: '0.8em',
        color: '#666',
      },
    },
  },
}));

function SelectField(props: any) {
  const { form, name, label = '', type, isRequired, menuItems = [], ...fieldProps } = props;
  const { labelStyle, requiredStyle, errorMessage } = styles;
  const classes = useStyles();

  const menuProps = {
    classes: { paper: classes.dropdownStyle },
  };

  const {
    control,
    register,
    formState: { errors },
    getValues,
  } = form;

  const onChange = (e: any) => {
    console.log(e);
  };

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
          <Select
            sx={{ '& .MuiInputBase-input': { borderColor: color, borderWidth: '1px !important' } }}
            labelId='demo-simple-select-label'
            {...field}
            id={name}
            input={<BootstrapInput />}
            MenuProps={menuProps}
          >
            {menuItems.map(({ value = '', description = '' }) => {
              return <MenuItem value={value}>{description}</MenuItem>;
            })}
          </Select>
        )}
      />
      <FormHelperText sx={errorMessage}>
        {errors[name]?.message && (
          <div>
            <FontAwesomeIcon icon={faTimes} /> {errors[name]?.message}
          </div>
        )}
      </FormHelperText>{' '}
    </FormControl>
  );
}

export default SelectField;
