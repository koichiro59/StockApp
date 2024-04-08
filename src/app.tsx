import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Login from './login';
import { BrowserRouter, Link, Route, Routes,Navigate } from "react-router-dom";
import List from './list';
import Stock from './stock';

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <div>
            <Header/>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="/list" element={<List/>}/>
                <Route path="/stock" element={<Stock/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
