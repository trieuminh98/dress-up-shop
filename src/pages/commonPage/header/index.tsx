import { faCartPlus, faChevronDown, faGift, faSearch, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { LOCATION_IMAGE_URL, LOGO_URL } from 'common/constants/constants';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';
import navMenus from 'common/json/navMenus';
import NavigationBox from '../navigationBox';

function Header() {
  const { navUserActStyle, navUserActRegister, navUserActCart, navMenu } = styles;
  const [show, setShow] = useState(false);
  const [navItemList, setNavItemList] = useState([]);
  console.log('init', navItemList);

  const onHoverOpen = (event: any) => {
    const {
      target: { id },
    } = event;
    setNavItemList((navMenus[+id] as any).navItemList);
    console.log('hoverOpen::', navItemList, id);
    setShow(true);
    console.log('hoverOpen2::', navItemList, id);
  };

  const onHoverClose = () => {
    console.log('hoverClose::', navItemList);
    setShow(false);
  };

  useEffect(() => {
    console.log('useEffect::', navItemList);
  }, [navItemList]);

  return (
    <>
      <Container maxWidth={false}>
        <Box sx={{ borderBottom: '1px solid #e8e8e8' }} pl={2} pr={2}>
          <Grid sx={{ alignItems: 'center', height: '135px' }} container spacing={2}>
            <Grid item xs={4}>
              <Box sx={{ display: 'flex', textDecoration: 'none' }}>
                <Link to='/login'>
                  <Typography sx={navUserActStyle}>
                    <FontAwesomeIcon icon={faSignInAlt} /> <span>Sign in</span>
                  </Typography>
                </Link>
                <Link to='/login'>
                  <Typography sx={{ ...navUserActStyle, ...navUserActRegister }}>
                    <span>Register</span>
                  </Typography>
                </Link>
                <Link to='/login'>
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
              <Box sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Link style={{ width: '25%' }} to='/login'>
                  <Typography sx={{ ...navUserActStyle, ...{ textAlign: 'center' } }}>
                    <FontAwesomeIcon icon={faGift} /> <span>Gift Certificate</span>
                  </Typography>
                </Link>
                <Link style={{ width: '25%' }} to='/login'>
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
        <Box sx={navMenu} pl={2} pr={2}>
          {navMenus.map((nav: any, index: number) => {
            return (
              <div style={{ padding: '0 10px' }}>
                <Link onMouseEnter={onHoverOpen} onMouseLeave={onHoverClose} style={{ textDecoration: 'none' }} to='/login'>
                  <Typography
                    id={index.toString()}
                    sx={{ ...navUserActStyle, ...{ fontSize: '12px', fontWeight: '500', textTransform: 'uppercase' } }}
                  >
                    <span>{nav.key}</span> <FontAwesomeIcon color='#f8b6a9' icon={faChevronDown} />
                  </Typography>
                </Link>
              </div>
            );
          })}
        </Box>
      </Container>
      <NavigationBox {...{ navItemList, show }} />
    </>
  );
}

export default Header;
