import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.jsx';
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "/src/components/themes/default";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
