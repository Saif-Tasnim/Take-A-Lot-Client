import React from 'react';
import Footer from '../Page/Shared/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import HelpCenterNav from '../Page/HelpCenter/HelpCenterNav';

const HelpCenterLayout = () => {
    const location = useLocation();
    const mainPath = location.pathname === "/help-centre";
    return (
        <div>
            {mainPath ||  <HelpCenterNav />}
            <div className="max-w-7xl mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HelpCenterLayout;