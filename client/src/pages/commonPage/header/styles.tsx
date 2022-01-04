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

  container: {
    '& *': {
      animationDuration: '0s !important',
    },
  },

  animation: {
    fontFamily: 'Avenir Next, sans-serif',
    fontSize: '0.9em',
    letterSpacing: '0.1em',
    lineHeight: '1',
    position: 'relative',
    '&::before': {
      content: "''",
      borderRadius: '1px',
      position: 'absolute',
      bottom: 11,
      left: 0,
      width: 0,
      height: '5%',
      background: '#333',
      WebkitTransition: '.6s' /* Safari and Chrome */,
      MozTransition: '.6s' /* Firefox */,
      msTransition: '.6s' /* IE 9 */,
      OTransition: '.6s' /* Opera */,
      transition: '.6s',
    },
  },

  navUserActStyle: {
    fontSize: '13px',
    transition: 'color .15s ease',
    fontWeight: 500,
    color: 'inherit',
    height: '100%',
    verticalAlign: 'middle',
  },

  box: {
    height: '100%',
    padding: '0 18px',
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
  shortMenu: {
    position: 'absolute',
    left: 0,
    zIndex: '999',
    background: 'white',
    fontSize: '5px',
    boxShadow: '0 10px 20px rgb(0 0 0 / 9%)',
  },
  menuItem: {
    fontSize: '14px',
    whiteSpace: 'nowrap',
    color: '#212121',
  },
} as const;

export default styles;
