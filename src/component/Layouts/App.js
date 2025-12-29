import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";

function App() {
  return (
    <>
        <Header/>
        <LeftSidebar/>
        <Outlet />
        <Footer/>
    </>
  );  
}

export default App;
