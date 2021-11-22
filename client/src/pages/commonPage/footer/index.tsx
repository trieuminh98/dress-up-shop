import { Box, Container } from '@mui/material';
import styles from './styles';
import React from 'react';

function Footer(props: any) {
  const { container } = styles;
  return (
    <Box sx={{ background: 'black' }}>
      <Container maxWidth='xl' sx={container}>
        <Box component='p'>
            Hello
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
