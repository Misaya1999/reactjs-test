import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";

function App() {
  return (
    <>
        <Header/>
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
        <Footer/>
    </>
  );  
}

export default App;
