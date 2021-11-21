import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    lm: true;
  }
}

export const miuTheme = createTheme({
  palette: {
    primary: {
      main: '#2B96F1',
      dark: '#0F85E9;',
      light: '#138AEF',
    },

    secondary: {
      main: 'rgba(0, 0, 0, 0.07)',
      light: ' rgba(1, 1, 1, 0.1)',
      dark: 'rgba(0, 0, 0, 0.12)',
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 414,
      md: 835,
      lg: 980,
      lm: 1160,
      xl: 1440,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          width: '100%',
          borderRadius: '20px',
          textTransform: 'none',
          height: '40px',
          fontSize: '15px',
          lineHeight: '20px',
        },
      },
    },
    MuiTab: {
      defaultProps: {
        style: {
          textTransform: 'none',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          borderRadius: '10px',
          justifyContent: 'center',
          height: '3px',
        },
      },
    },
    MuiCard: {
      defaultProps: {
        style: {
          boxShadow:
            ' 0 0 2px rgba(0, 0, 0, .08), 0 2px 24px rgba(0, 0, 0, .08)',
          borderRadius: '12px',
        },
      },
    },
  },
  typography: {
    fontSize: 15,
    button: {
      fontSize: 15,
      fontWeight: 500,
    },
  },
});
