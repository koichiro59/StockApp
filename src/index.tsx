import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Login from './login';
import List from './list';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import App from './app';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

