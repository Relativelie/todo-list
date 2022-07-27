import { createTheme } from '@mui/material';

export const colors = {
  light: '#7a7a7a',
  default: '#FFFFFF',
  warning: '#db555560',
};

export const theme = createTheme({
  palette: {
    warning: { main: colors.warning },
    light: colors.light,
    default: colors.default,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontWeight: 300,
      },
    },
  },
});
