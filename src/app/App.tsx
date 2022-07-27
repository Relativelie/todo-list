import { css, Global } from '@emotion/react';
import { PagesTodoMain } from '@pages/';
import { setupStore } from '@shared/';
import { Provider } from 'react-redux';

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <PagesTodoMain />
      <Global
        styles={css`
          body {
            display: flex;
            justify-content: center;
            background: #e0dff;
            min-height: "100vh";
            max-width: "100vw";
          }
        `}
      />
    </Provider>
  );
}

export default App;
