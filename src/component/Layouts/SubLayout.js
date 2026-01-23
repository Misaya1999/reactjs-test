
// Layout không có Left side bar

import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function SubLayout() {
  return (
    <>
        <Header />

        <div className="container">
          <Outlet />
        </div>

        <Footer />
    </>
  );
}

export default SubLayout;
