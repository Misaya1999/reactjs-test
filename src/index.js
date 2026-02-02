import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Test from "./component/Test";
import MainLayout from "./component/Layouts/MainLayout";
import SubLayout from "./component/Layouts/SubLayout";
import Blog from "./component/Blog";
import Home from "./component/Home";
import Account from "./component/Account";
import Login from "./component/Login";
import Vidu1 from "./bai11/Vidu1";
import Login1 from "./bai11/Login1";
import Vidu2 from "./bai11/Vidu2";
import Vidu3 from "./bai12/Vidu3";
import A_Bai1 from "./bai31/A_Bai1";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
        <Routes>
          
          <Route path="test" element={<Test />} />
          <Route path="vidu1" element={<Vidu1 />} />
          <Route path="login1" element={<Login1 />} />
          <Route path="vidu2" element={<Vidu2 />} />
          <Route path="vidu3" element={<Vidu3 />} />
          <Route path="a_bai1" element={<A_Bai1 />} />

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
