const styles = {
  navBox: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    pt: 2,
    pb: 3,
    position: 'absolute',
    zIndex: 999,
    bgcolor: 'white',
    width: '100%',
    left: '0',
    display: 'flex',
    boxShadow: '0 10px 20px rgb(0 0 0 / 9%)',
  },
  navItemHeader: {
    p: '15px 0',
    fontSize: '.6em',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '.3em',
  },
  navContent: {
    width: '15%',
    p: '0 10px',
  },
  navItem: {
    fontSize: '.75em',
    fontWeight: '400',
    p: '7px 0',
  },
} as const;

export default styles;
