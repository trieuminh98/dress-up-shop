import { faCartPlus, faChevronDown, faGift, faSearch, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Grid, Typography, Drawer } from '@mui/material';
import { Box } from '@mui/system';
import logo from 'assets/images/logo.png';
import navMenus from 'common/json/navMenus';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBox from '../navigationBox';
import styles from './styles';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const { navUserActStyle, navUserActRegister, navUserActCart, navMenu, drawerScrollable, drawerTitle } = styles;
  const [show, setShow] = useState(false);
  const [navItemList, setNavItemList] = useState([]);
  const [state,setState] = useState(false);

  const toggleDrawer = (open:any) => {
    setState(open)
  }

  const list = () =>{
    return(
      <div onClick={() => toggleDrawer(false)}>        
        <Box component='p' sx={{fontSize:'20px',
                                fontFamily:'sans-serif',
                                marginLeft: '45px',
                                paddingTop: '10px',
                                position: 'relative',
                                letterSpacing: '3px',}}>
          Cart
          <CloseIcon sx={{ position: 'absolute' , right: '20px', bottom:'0px'}}></CloseIcon>
        </Box>
        <Box component='p' sx={drawerScrollable}>Your cart is currently empty. </Box>
      </div>
    );
  }

  const onHoverOpen = (event: any) => {
    const {
      target: { id },
    } = event;
    setNavItemList((navMenus[+id] as any).navItemList);
    setShow(true);
  };

  const onHoverClose = () => {
    setShow(false);
  };

  useEffect(() => {}, [navItemList]);

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
                <Link style={{ width: '25%' }} to='/login'>
                  <Typography sx={{ ...navUserActStyle, ...navUserActCart, ...{ textAlign: 'center' } }}>
                    <FontAwesomeIcon icon={faCartPlus} onClick={() => toggleDrawer(true)} /> <span>Cart</span>
                    <Drawer
                      anchor={'right'}
                      open={state}
                      onClose={() => toggleDrawer(false)}                   
                    >
                      {list()}
                    </Drawer>
                  </Typography>
                </Link>
                {/* <Link style={{ width: '55%' }} to='/login'>
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
              <div key={index} style={{ padding: '0 10px' }}>
                <Link onMouseEnter={onHoverOpen} onMouseLeave={onHoverClose} to='/login'>
                  <Typography
                    id={index.toString()}
                    sx={{ ...navUserActStyle, ...{ fontSize: '12px', fontWeight: '500', textTransform: 'uppercase', color: 'inherit' } }}
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
