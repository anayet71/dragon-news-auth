import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";

const AuthLayout = () => {
    return (
        <div className="font-poppins bg-[#F3F3F3]"> 
           <header className="py-3 w-11/12 mx-auto">
            <Navbar></Navbar>
           </header>
            <Outlet></Outlet>            
        </div>
    );
};

export default AuthLayout;