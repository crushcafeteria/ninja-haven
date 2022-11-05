import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";

const Layout = ({children}: any) => {
    return (
        <React.Fragment>
            <Navbar/>
                <div className="container my-5">
                    {children}
                </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Layout;