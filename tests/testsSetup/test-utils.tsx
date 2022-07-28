import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { setupStore, theme, en } from "../../src/shared";
import { ReactNode } from "react";
import { ThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const store = setupStore();
// eslint-disable-next-line react/prop-types
const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>{children} </ThemeProvider>
    </MuiThemeProvider>
  </Provider>
);

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: {
      en: { translation: en },
    },
    fallbackLng: 'en',
  });

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";
export { customRender as render };
