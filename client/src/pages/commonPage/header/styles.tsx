const styles = {
  navUserActCart: {
    '&::before': {
      content: '"|"',
      color: '#e5e5e5',
      position: 'absolute',
      top: '50px',
      right: '24.8%',
    },
  },

  navUserActStyle: {
    color: '#333',
    fontWeight: 400,
    fontSize: '0.8rem',
    transition: 'color .15s ease',
    padding: '0 10px',
    '&:hover > #menu-0': {
      visibility: 'visible'
    }
  },

  box: {
    padding: '0 10px',
    '#menu-0': {
      display: 'none'
    },
    '&:hover #menu-0': {
      display: 'block'
    }
  },

  navUserActStyleDiv: {
    '& div:nth-of-type(1)': {
      display: 'inline-block',
      margin: '0 10px',
    },
  },

  navUserActRegister: {
    '&::after': {
      content: '"|"',
      color: '#e5e5e5',
      marginLeft: '10px',
    },
    '&::before': {
      content: '"|"',
      color: '#e5e5e5',
      marginRight: '10px',
    },
  },

  navMenu: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
  },
  drawerScrollable: {
    width:'400px',
    fontSize:'13px',
    fontFamily:'sans-serif',
    marginLeft: '45px',
    paddingTop: '50px',
  },
  drawerTitle: {
    fontSize:'20px',
    fontFamily:'sans-serif',
    marginLeft: '45px',
    paddingTop: '10px',
    position: 'relative',
    letterSpacing: '3px',
  },
};

export default styles;
