import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
// src/main.jsx
import 'assets/fonts/fonts.css';
import './App.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element #root not found');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


