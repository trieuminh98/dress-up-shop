import { Box, Container, Grid, Typography, } from '@mui/material';
import logo2 from 'assets/images/logo2.png';
import styles from './styles';
import React from 'react';

function Footer(props: any) {
  const { container } = styles;
  const { link } = styles;
  const { title } = styles;
  return (
    <Box sx={{ background: '#212121' }}>
      <Container maxWidth='xl' sx={container}>
        <Box component='p'>
            <img style={{ width: 164, height: 46, }} src={logo2} alt="logo" />
        </Box>
      </Container>
      <Container maxWidth='xl' sx={{ background: '#212121' }}>
          <Grid container spacing={3}>
            <Grid item xs={3} sx ={{ color: 'white'}}>
              <Box component="span">
              <Typography sx={ title }>QUICK LINKS</Typography> 
              <Typography>               
                <Typography sx={ link }> <a style={{ color: 'white', }}>Shipping + Returns</a><br /></Typography>
                <Typography sx={ link }> <a style={{ color: 'white', }}>FAQs</a><br /></Typography>
                <Typography sx={ link }> <a style={{ color: 'white', }}>Contact Us</a><br /></Typography>
                <Typography sx={ link }> <a style={{ color: 'white', }}>Gift Cards</a><br /></Typography>
                <Typography sx={ link }> <a style={{ color: 'white', }}>Privacy Policy</a><br /></Typography>
                <Typography sx={ link }> <a style={{ color: 'white', }}>Terms of Service</a><br /></Typography>
                <Typography sx={ link }> <a style={{ color: 'white', }}>Refund Policy</a><br /></Typography>
              </Typography>              
              </Box>              
            </Grid>
            <Grid item xs={3} sx ={{ color: 'white'}}>
              <Box component="span"> 
                <Typography sx={ title }>ABOUT US</Typography> 
                <Typography>
                  <Typography sx={ link }><a style={{ color: 'white', }}>Our Story + Mission</a><br /></Typography>
                  <Typography sx={ link }><a style={{ color: 'white', }}>Locations</a><br /> </Typography>
                  <Typography sx={ link }><a style={{ color: 'white', }}>Collaborations</a><br /> </Typography>
                  <Typography sx={ link }><a style={{ color: 'white', }}>Careers</a><br /> </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3} sx ={{ color: 'white'}}>
              <Box component="span"> 
              <Typography sx={ title }>SIGN UP AND SAVE</Typography> 
              <Typography sx={ link }>
                <a style={{ color: 'white', }}>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</a>
              </Typography>
              </Box>
            </Grid>
          </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
