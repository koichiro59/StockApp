import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Login from './login';
import List from './list';
import Stock from './stock';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header/>
    <Stock/>
  </React.StrictMode>
);

