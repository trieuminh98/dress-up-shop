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
    transition: 'color .15s ease',
    padding: '0 10px',
    fontSize: '12px',
    fontWeight: 500,
    textTransform: 'uppercase',
    color: 'inherit',
    height: '100%',
    verticalAlign: 'middle',
  },

  box: {
    padding: '0 18px',
    height: '100%',
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
    width: '400px',
    fontSize: '13px',
    fontFamily: 'sans-serif',
    marginLeft: '45px',
    paddingTop: '50px',
  },
  drawerTitle: {
    fontSize: '20px',
    fontFamily: 'sans-serif',
    marginLeft: '45px',
    paddingTop: '10px',
    position: 'relative',
    letterSpacing: '3px',
  },
  menuItem: {
    fontSize: '14px',
    whiteSpace: 'nowrap',
    color: '#212121',
  },
} as const;

export default styles;
