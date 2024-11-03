import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
    return (
        <div >
            <div className="h-16">
            <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-232px)] container mx-auto px-12 my-10">

            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;