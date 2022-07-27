import { css, Global, ThemeProvider } from '@emotion/react';
import { PagesTodoMain } from '@pages/';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/';
import { setupStore, theme } from '@shared/';
import { Provider } from 'react-redux';

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <PagesTodoMain />
          <Global
            styles={css`
              body {
                display: flex;
                justify-content: center;
                background-color: #c6c6c6bd;
              }
            `}
          />
        </ThemeProvider>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
