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
};

export default styles;
