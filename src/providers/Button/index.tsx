import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#202020',
  borderColor: '#202020',
  color: '#fff',
  borderRadius: 0,
  fontWeight: 300,
  fontSize: '0.9em',
  padding: '5px 30px',
  '&:hover': {
    backgroundColor: '#202020',
  },
}));

export default function CustomizedButtons(props: any) {
  const { content, ...remainProps } = props;
  return <ColorButton {...remainProps}>{content}</ColorButton>;
}
