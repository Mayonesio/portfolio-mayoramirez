// 'use client'
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Foooter";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div>
            {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;
