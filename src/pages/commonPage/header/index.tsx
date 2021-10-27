import { faCartPlus, faChevronDown, faGift, faSearch, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { LOCATION_IMAGE_URL, LOGO_URL } from 'common/constants/constants';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';
import navMenus from 'common/json/navMenus';

function Header() {
  const { navUserActStyle, navUserActRegister, navUserActCart } = styles;
  const [show, setShow] = useState(false);
  const [currentNavTab, setCurrentNavTab] = useState({});
  const onHoverOpen = (event: any) => {
    const {
      target: { id },
    } = event;
    setCurrentNavTab(navMenus[id]);
    console.log(currentNavTab)
    setShow(true);
  };

  const onHoverClose = () => {
    setShow(false);
  };

  return (
    <Container maxWidth={false}>
      <Box sx={{ borderBottom: '1px solid #e8e8e8' }} pl={2} pr={2}>
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
      <Box sx={{ borderBottom: '1px solid #e8e8e8', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px' }} pl={2} pr={2}>
        {navMenus.map((nav: any, index: number) => {
          return (
            <Link onMouseOver={onHoverOpen} onMouseOut={onHoverClose} style={{ textDecoration: 'none', padding: '0 10px' }} to='/login'>
              <Typography id={index.toString()} sx={{ ...navUserActStyle, ...{ fontSize: '12px', fontWeight: '500', textTransform: 'uppercase' } }}>
                <span>{nav.key}</span> <FontAwesomeIcon color='#f8b6a9' icon={faChevronDown} />
              </Typography>
            </Link>
          );
        })}
      </Box>
      <Box sx={{ display: show ? 'flex' : 'none', justifyContent: 'space-around', pl: 30, pr: 30, textTransform: 'uppercase' }}>
        <div style={{ width: '15%' }}>
          <Typography sx={{ p: '15px 0', borderBottom: '1px solid black', fontSize: '12px', fontWeight: '500' }}>Du exlusive</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </Box>
        </div>
        <div style={{ width: '15%' }}>Hello 2</div>
        <div style={{ width: '15%' }}>Hello 3</div>
        <div style={{ width: '15%' }}>Hello 4</div>
        <div style={{ width: '15%' }}>Hello 5</div>
      </Box>
    </Container>
  );
}

export default Header;
