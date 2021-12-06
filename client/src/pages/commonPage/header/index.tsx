import { faCartPlus, faChevronDown, faGift, faSearch, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CloseIcon from '@mui/icons-material/Close';
import { Container, Drawer, Grid, MenuItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import logo from 'assets/images/logo.png';
import navMenus from 'common/json/navMenus';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBox from '../navigationBox';
import styles from './styles';

function Header() {
  const { navUserActStyle, navUserActRegister, navUserActCart, navMenu, drawerScrollable, box } = styles;
  const [state, setState] = useState(false);

  const toggleDrawer = (open: any) => {
    setState(open);
  };

  const list = () => {
    return (
      <div onClick={() => toggleDrawer(false)}>
        <Box
          component='p'
          sx={{ fontSize: '20px', fontFamily: 'sans-serif', marginLeft: '45px', paddingTop: '10px', position: 'relative', letterSpacing: '3px' }}
        >
          Cart
          <CloseIcon sx={{ position: 'absolute', right: '20px', bottom: '0px' }}></CloseIcon>
        </Box>
        <Box component='p' sx={drawerScrollable}>
          Your cart is currently empty.{' '}
        </Box>
      </div>
    );
  };

  const ShortMenu = (props: any) => {
    const { navItemList, index } = props;
    return (
      <Box position='absolute' zIndex='999' component='div' id={`menu-${index}`} bgcolor='white'>
        {navItemList.map((item: any) => {
          return <MenuItem key={item.key}>{item.description}</MenuItem>;
        })}
      </Box>
    );
  };

  const getHoverCss = (index: number, isShort: boolean) => {
    const cssObj = {} as any;
    cssObj[`#menu-${index}`] = { display: 'none' };
    cssObj[`&:hover #menu-${index}`] = { display: isShort ? 'block' : 'flex' };
    return cssObj;
  };

  return (
    <>
      <Container maxWidth={false}>
        <Box sx={{ borderBottom: '1px solid #e8e8e8' }} pl={2} pr={2}>
          <Grid sx={{ alignItems: 'center', height: '135px' }} container spacing={2}>
            <Grid item xs={4}>
              <Box sx={{ display: 'flex' }}>
                <Link to='/login'>
                  <Typography sx={navUserActStyle}>
                    <FontAwesomeIcon icon={faSignInAlt} /> <span>Sign in</span>
                  </Typography>
                </Link>
                <Link to='/register'>
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
              <Link to='/'>
                <img style={{ display: 'block', margin: '0 auto' }} alt='app_logo' src={logo} />
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Link style={{ width: '25%' }} to='/login'>
                  <Typography sx={{ ...navUserActStyle, ...{ textAlign: 'center' } }}>
                    <FontAwesomeIcon icon={faGift} /> <span>Gift Certificate</span>
                  </Typography>
                </Link>
                <Typography sx={{ ...navUserActStyle, ...navUserActCart, ...{ textAlign: 'center' } }}>
                  <FontAwesomeIcon icon={faCartPlus} onClick={() => toggleDrawer(true)} /> <span>Cart</span>
                  <Drawer anchor={'right'} open={state} onClose={() => toggleDrawer(false)}>
                    {list()}
                  </Drawer>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={navMenu} pl={2} pr={2}>
          {navMenus.map(({ key, navItemList, isShort }, index: number) => {
            return (
              <Box key={index} sx={{ ...box, ...getHoverCss(index, Boolean(isShort)) }}>
                <Link to='/login'>
                  <Typography
                    id={index.toString()}
                    sx={{ ...navUserActStyle, ...{ fontSize: '12px', fontWeight: '500', textTransform: 'uppercase', color: 'inherit' } }}
                  >
                    <span>{key}</span> <FontAwesomeIcon color='#f8b6a9' icon={faChevronDown} />
                  </Typography>
                </Link>
                {isShort ? <ShortMenu {...{ navItemList, index }} /> : <NavigationBox {...{ navItemList, index }} />}
              </Box>
            );
          })}
        </Box>
      </Container>
    </>
  );
}

export default Header;
