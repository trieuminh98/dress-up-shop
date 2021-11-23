const styles = {
  taskCardContent: {
    textTransform: 'uppercase',
    color: '#fff',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: '998',
    textAlign: 'center',
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    width: 'auto',
    height: 'auto',
  },
  subLabelStyles: {
    fontWeight: '400',
    letterSpacing: '.3em',
    fontSize: '.8375em',
    lineHeight: '1.2',
  },
  labelStyles: {
    m: '10px 0',
    fontWeight: '400',
    letterSpacing: '.1em',
    fontSize: '1.4em',
    lineHeight: '1.2',
  },
  button: {
    border: '2px solid #fff',
    borderRadius: 0.5,
    background: 'transparent',
    fontSize: '0.8em',
    fontWeight: '500',
    letterSpacing: '.3em',
    '&.MuiButtonBase-root:hover': {
      bgcolor: 'transparent',
    },
  },
} as const;

export default styles;
