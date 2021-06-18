import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#7aa2f7',
    },
    secondary: {
      main: '#bb9af7',
    },
    error: {
      main: '#f7768e',
    },
    background: {
      default: '#1a1b26',
    },
    
  },
});

export default theme;