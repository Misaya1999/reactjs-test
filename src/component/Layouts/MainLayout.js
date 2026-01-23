
// Layout có Left side bar

import Header from "./Header";
import Footer from "./Footer";
import LeftSidebar from "./LeftSidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <LeftSidebar />
          </div>
          <div className="col-sm-9">
            <Outlet />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MainLayout;
