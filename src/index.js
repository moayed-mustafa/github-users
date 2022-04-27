import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import _ThemeProvider from './context/theme-context.tsx';

const root = ReactDOM.createRoot (document.getElementById ('root'));
root.render (
  <React.StrictMode>
    <_ThemeProvider>
        <App />
</_ThemeProvider>
  </React.StrictMode>
);
