import { Box, Container, Grid, Typography, } from '@mui/material';
import shopLogo from 'assets/images/shopLogo.png';
import styles from './styles';
import React from 'react';

function Footer(props: any) {
  const { container, link, title } = styles;
  const quickLinks = ['Shipping + Returns', 'FAQs', 'Contact Us','Gift Cards','Privacy Policy','Terms of Service','Refund Policy'];
  const aboutUs = ['Our Story + Mission', 'Locations', 'Collaborations', 'Careers'];

  return (
    <Box bgcolor='#212121'>
      <Container maxWidth='xl' sx={container}>
        <Box component='p'>
            <Box component='img' width={164} height={46} src={shopLogo} alt='shopLogo'></Box>
        </Box>
      </Container>
      <Container maxWidth='xl' sx={{ background: '#212121' }}>
          <Grid container spacing={3}>
            <Grid item xs={3} sx ={{ color: 'white'}}>
              <Box component="span">
              <Typography sx={ title }>QUICK LINKS</Typography> 
              <Typography>               
                {quickLinks.map((item:any) => {
                    return <Typography sx={ link }><a style={{ color: 'white', }}></a>{ item }</Typography>;
                  })
                }
              </Typography>              
              </Box>              
            </Grid>
            <Grid item xs={3} sx ={{ color: 'white'}}>
              <Box component="span"> 
                <Typography sx={ title }>ABOUT US</Typography> 
                <Typography>
                  {aboutUs.map((item:any) => {
                    return <Typography sx={ link }><a style={{ color: 'white', }}></a>{ item }</Typography>;
                    })
                  }
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
