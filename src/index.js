import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from './component/Layouts/App';
import Home from './component/Home';
import Account from './component/Account';
import Login from './component/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index path='/' element={<Home />} />
            <Route path='/account' element={<Account />} />
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
