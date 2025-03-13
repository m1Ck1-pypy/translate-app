import './index.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './screens/app';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
