const styles = {
  labelStyles: {
    textTransform: 'uppercase',
    fontSize: '1.2rem',
    color: '#fff',
    fontWeight: '400',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: '998',
    textAlign: 'center',
  },
  mainGroupImage: {
    maxWidth: '100%',
    WebkitTransition: 'all 1s ease' /* Safari and Chrome */,
    MozTransition: 'all 1s ease' /* Firefox */,
    msTransition: 'all 1s ease' /* IE 9 */,
    OTransition: 'all 1s ease' /* Opera */,
    transition: 'all 1s ease',
    '&:hover': {
      WebkitTransform: 'scale(1.05)' /* Safari and Chrome */,
      MozTransform: 'scale(1.05)' /* Firefox */,
      msTransform: 'scale(1.05)' /* IE 9 */,
      OTransform: 'scale(1.05)' /* Opera */,
      transform: 'scale(1.05)',
      '&::after': {
        opacity: 0.3,
      },
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 'auto',
      backgroundColor: '#000',
      opacity: 0.1,
      transition: 'opacity .8s ease',
      height: '98%'
    },
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    width: 'auto',
    height: 'auto',
  },
  taskCard: {
    display: 'inline-block',
    position: 'relative',
    overflow: 'hidden',
  },
} as const;

export default styles;
