import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Test from "./component/Test";
import MainLayout from "./component/Layouts/MainLayout";
import SubLayout from "./component/Layouts/SubLayout";
import Blog from './component/Blog';
import Home from './component/Home';
import Account from './component/Account';
import Login from './component/Login';
import Vidu1 from './bai11/Vidu1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
        <Routes>
          
          <Route path="test" element={<Test />} />
          <Route path="vidu1" element={<Vidu1 />} />

          {/* Layout có sidebar */}
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
          </Route>

          {/* Layout không sidebar */}
          <Route element={<SubLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="account" element={<Account />} />
          </Route>

        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
