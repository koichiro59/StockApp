import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { AuthProvider } from "./param"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <AuthProvider>
      <React.StrictMode>
          <App/>
      </React.StrictMode>
    </AuthProvider>
);

