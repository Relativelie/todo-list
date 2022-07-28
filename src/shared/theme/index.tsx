import { createTheme, Theme } from '@mui/material';

export const colors = {
  light: '#7a7a7a',
  default: '#FFFFFF',
  warning: '#db555560',
};

export const theme: Theme = createTheme({
  palette: {
    warning: { main: colors.warning },
    secondary: { main: colors.default, light: colors.light },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontWeight: 300,
      },
    },
  },
});
