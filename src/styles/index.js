import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: '#e0e0e0',
    },
    system: {
      body: '#e0e0e0',
      header: "#ffffff"
    },
    itemcard: {
      body: "#fafafa",
      button: "#0000ff",
      remove: "red",
    }
  },
});

export default theme;
