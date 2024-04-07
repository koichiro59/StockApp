import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Login from './login';
import List from './list';
import Stock from './stock';
import Regist from './regist';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header/>
      <Link to="/login">login</Link>
      <Routes>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

