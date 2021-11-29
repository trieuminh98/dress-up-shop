const styles = {
  labelStyles: {
    position: 'absolute',
    fontSize: '0.8em',
    fontWeight: 400,
    width: '93%',
    bottom: '15px',
    left: '10px',
    backgroundColor: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#333',
    p: '5px 0'
  },
  mainGroupImage: {
    maxWidth: '100%',
    position: 'relative',
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    width: 'auto',
    height: 'auto',
  },
  itemHover: {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
    transition: 'opacity 0.3s ease-out',
    '&:hover': {
      opacity: 1,
    },
  },
  taskCard: {
    display: 'inline-block',
    position: 'relative',
    overflow: 'hidden',
  },
} as const;

export default styles;
