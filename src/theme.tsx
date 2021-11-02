import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    background: {
      default: '#ffffff',
    },
  },
  components: { 
    // Name of the component
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '0.8rem',
          color: 'inherit'
        },
      },
    },
  },
});

export default theme;
