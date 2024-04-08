import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Login from './login';

const App: React.FC = () => {
  return (
    <div>
        <Header/>
        <Login/>
    </div>
  );
}

export default App;
