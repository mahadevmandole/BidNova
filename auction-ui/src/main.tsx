import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App/App';
import './styles/global.scss';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
