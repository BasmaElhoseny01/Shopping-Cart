import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: '#e0e0e0',
    },
    system: {
      main: '#fafafa',
      header: "#FAFFFF99"
    },
    avatar:{
      main:"#ff0000",
      contrastText:"#ffffff",
      light:"#2196f3"
    },
    itemcard: {
      body: "#fafafa",
      button: "#4285F4",
      remove: "#ff0030",
    }
  },
});

export default theme;
