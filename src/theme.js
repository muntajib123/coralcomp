// src/theme.js
import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: { main: '#003366' },
            background: {
              default: '#f4f6f8',
              paper: '#ffffff',
            },
          }
        : {
            primary: { main: '#00bfff' },
            background: {
              default: '#121212',
              paper: '#1e1e1e',
            },
          }),
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
  });
