const styles = {
  typeBanner: {
    display: 'flex',
    justifyContent: 'center',
    p: 1.5,
  },
  leftContent: {
    letterSpacing: '0.1em',
    fontWeight: 500,
    p: 1,
    fontSize: '0.9em',
  },
  rightContent: {
    letterSpacing: '.3em',
    fontWeight: 400,
    p: 1,
    textTransform: 'uppercase',
    border: '1px solid rgba(216, 164, 142, 0.2)',
    borderRadius: '1px',
    fontSize: '0.75em',
  },
} as const;

export default styles;
