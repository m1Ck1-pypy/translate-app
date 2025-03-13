import './index.scss';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import './components/theme.css';

import { ThemeProvider } from '@gravity-ui/uikit';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './screens/app';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme='light'>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
