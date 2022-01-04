import { faCartPlus, faGift, faSearch, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CloseIcon from '@mui/icons-material/Close';
import { Container, Drawer, Grid, MenuItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import logo from 'assets/images/logo.png';
import navMenus from 'common/json/navMenus';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBox from './navigationBox';
import styles from './styles';

function Header() {
  const { navUserActStyle, navUserActRegister, navUserActCart, navMenu, drawerScrollable, box, menuItem, animation, shortMenu, container } = styles;
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
    const { navItemList, index, isShort } = props;
    return (
      <Box component='div' id={`menu-${index}${isShort && '-short'}`} sx={shortMenu}>
        {navItemList.map((item: any) => {
          return (
            <MenuItem sx={menuItem} key={item.key}>
              {item.description}
            </MenuItem>
          );
        })}
      </Box>
    );
  };

  const getHoverCss = (index: number) => {
    const cssObj = {} as any;
    cssObj[`#menu-${index}-short`] = {
      visibility: 'hidden',
      WebkitTransform: 'translateY(-10px)' /* Safari and Chrome */,
      MozTransform: 'translateY(-10px)' /* Firefox */,
      msTransform: 'translateY(-10px)' /* IE 9 */,
      OTransform: 'translateY(-10px)' /* Opera */,
      transform: 'translateY(-10px)',
    };
    cssObj[`&:hover #menu-${index}-short`] = {
      visibility: 'visible',
      WebkitTransform: 'translateY(0) ' /* Safari and Chrome */,
      MozTransform: 'translateY(0)' /* Firefox */,
      msTransform: 'translateY(0)' /* IE 9 */,
      OTransform: 'translateY(0)' /* Opera */,
      transform: 'translateY(0)',
      WebkitTransition: 'all .3s cubic-bezier(.2, .06, .05, .95)' /* Safari and Chrome */,
      MozTransition: 'all .3s cubic-bezier(.2, .06, .05, .95)' /* Firefox */,
      msTransition: 'all .3s cubic-bezier(.2, .06, .05, .95)' /* IE 9 */,
      OTransition: 'all .3s cubic-bezier(.2, .06, .05, .95)' /* Opera */,
      transition: 'all .3s cubic-bezier(.2, .06, .05, .95)',
    };
    cssObj[`#menu-${index}`] = {
      overflow: 'hidden',
      opacity: 0,
      animation: `fading 1s ease-in-out forwards`,
      '@keyframes fading': {
        '0%': {
          opacity: 1,
        },
        '100%': {
          opacity: 0,
          display: 'none',
          visibility: 'hidden',
        },
      },
      '& #nav-content': {
        animation: `myEffectExit .5s forwards ease-in-out`,
        '@keyframes myEffectExit': {
          '0%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: 0,
            transform: 'translateY(20%)',
          },
        },
      },
    };
    cssObj[`&:hover #menu-${index}`] = {
      opacity: 1,
      animation: `fadingOut 0.5s ease-in-out`,
      '@keyframes fadingOut': {
        '0%': {
          opacity: 0,
        },
        '100%': {
          opacity: 1,
        },
      },
      '& #nav-content': {
        animation: `myEffect 0.5s 6s ease-in-out`,
        '@keyframes myEffect': {
          '0%': {
            opacity: 0,
            transform: 'translateY(20%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
    };
    cssObj[`&:hover #text-${index}`] = {
      '&::before': {
        width: '100%',
      },
    };
    return cssObj;
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      const elems = document.querySelectorAll('#container');

      [].forEach.call(elems, function (el: any) {
        el.className = '';
      });
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    }
  }, []);

  return (
    <>
      <Container id='container' sx={container} maxWidth={false}>
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
              <Box key={index} sx={{ ...box, ...getHoverCss(index), ...{ position: isShort ? 'relative' : 'unset' } }}>
                <Link to='/login'>
                  <Typography id={`text-${index}`} sx={{ ...navUserActStyle, ...animation }}>
                    <Box pt={2}>{key}</Box>
                  </Typography>
                </Link>
                {isShort ? <ShortMenu {...{ navItemList, index, isShort }} /> : <NavigationBox {...{ navItemList, index }} />}
              </Box>
            );
          })}
        </Box>
      </Container>
    </>
  );
}

export default Header;
