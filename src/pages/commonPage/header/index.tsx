import { faCartPlus, faGift, faSearch, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { LOCATION_IMAGE_URL, LOGO_URL } from 'common/constants/constants';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';

function Header() {
  const { navUserActStyle, navUserActRegister, navUserActCart } = styles;

  return (
    <Container sx={{ borderBottom: '1px solid #e8e8e8' }} maxWidth={false}>
      <Box pl={2} pr={2}>
        <Grid sx={{ alignItems: 'center', height: '135px' }} container spacing={2}>
          <Grid item xs={4}>
            <Box sx={{ display: 'flex' }}>
              <Link style={{ textDecoration: 'none' }} to='/login'>
                <Typography sx={navUserActStyle}>
                  <FontAwesomeIcon icon={faSignInAlt} /> <span>Sign in</span>
                </Typography>
              </Link>
              <Link style={{ textDecoration: 'none' }} to='/login'>
                <Typography sx={{ ...navUserActStyle, ...navUserActRegister }}>
                  <span>Register</span>
                </Typography>
              </Link>
              <Link style={{ textDecoration: 'none' }} to='/login'>
                <Typography sx={navUserActStyle}>
                  <FontAwesomeIcon icon={faSearch} /> <span>Search</span>
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <img style={{ display: 'block', margin: '0 auto' }} alt='app_logo' src={LOGO_URL} />
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link style={{ width: '25%', textDecoration: 'none' }} to='/login'>
                <Typography sx={{ ...navUserActStyle, ...{ textAlign: 'center' } }}>
                  <FontAwesomeIcon icon={faGift} /> <span>Gift Certificate</span>
                </Typography>
              </Link>
              <Link style={{ width: '25%', textDecoration: 'none' }} to='/login'>
                <Typography sx={{ ...navUserActStyle, ...navUserActCart, ...{ textAlign: 'center' } }}>
                  <FontAwesomeIcon icon={faCartPlus} /> <span>Cart</span>
                </Typography>
              </Link>
              {/* <Link style={{ width: '55%', textDecoration: 'none' }} to='/login'>
                <img alt='app_logo' style={{ width: '25px' }} src={LOCATION_IMAGE_URL} />
                <Box sx={{ display: 'inline-block' }}>
                  <Typography>SET YOUR STORE</Typography>
                  <Typography>View pricing & availability</Typography>
                </Box>
              </Link> */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Header;
