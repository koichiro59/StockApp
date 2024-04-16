import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import Practice from './practice';
import { AuthProvider } from "./param"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <AuthProvider>
      <React.StrictMode>
          <Practice/>
      </React.StrictMode>
    </AuthProvider>
);

