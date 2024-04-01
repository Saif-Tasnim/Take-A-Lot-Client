import React from 'react';
import { HiBars3BottomLeft, HiHome, HiMiniAdjustmentsHorizontal } from 'react-icons/hi2';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
  <Outlet />
    <label htmlFor="my-drawer-2" className="drawer-button lg:hidden absolute left-16 -top-12 z-50"><HiBars3BottomLeft className='w-10 h-10 text-primary' /></label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu py-4 pl-4 pr-0 w-60 min-h-screen bg-[#525659] text-base-content">
    <Link to="/" className="inline-flex items-start justify-start gap-2 mt-2 mb-10">
                        <img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/logo-invert.svg-97f9dff70e59ec07ae74.svg" alt="Logo" className='' />
                    </Link>

                    <NavLink to="/seller-dashboard/dashboard-home" className={({ isActive }) => (isActive ? "dash-active" : "dash-default")}><HiHome className='inline-flex items-center h-5 w-5' /> Dashboard</NavLink>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;