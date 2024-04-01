import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import ReturnPolicyBanners from '../../components/ReturnPolicyBanners/ReturnPolicyBanners';
import ReturnPolicyTabs from '../../components/ReturnPolicyTabs/ReturnPolicyTabs';

const ReturnPolicyAndHelp = () => {
    return (
        <section>
<div className='about-option max-w-7xl mx-auto py-5 lg:px-5 flex items-center gap-4 overflow-x-auto bg-white px-2'>
<NavLink to="/about" className={({isActive})=>(isActive ? "px-2 py-2 rounded text-xs text-[#000] bg-transparent" : "px-2 py-2 rounded text-xs text-[#000] bg-transparent")}>Home</NavLink>

<NavLink to="/about/who-we-are" className={({isActive})=>(isActive ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap" : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap")}>Who We Are</NavLink>

<NavLink to="/about/our-journey" className={({isActive})=>(isActive ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap" : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap")}>Our Journey</NavLink>

<NavLink to="/about/our-values" className={({isActive})=>(isActive ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap" : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap")}>Our Values</NavLink>

<NavLink to="/about/our-environment" className={({isActive})=>(isActive ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap" : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap")}>Our Environment</NavLink>

<NavLink to="/about/careers" className={({isActive})=>(isActive ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap" : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap")}>Our Careers</NavLink>

<NavLink to="/about/extraordinary-minds" className={({isActive})=>(isActive ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap" : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap")}>Extraordinary Minds</NavLink>

<NavLink to="/about/company-news" className={({isActive})=>(isActive ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap" : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap")}>Company News</NavLink>

<NavLink to="/about/our-charity" className={({isActive})=>(isActive ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap" : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap")}>Our Charity</NavLink>

<NavLink to="/about/delivery-team" className={({isActive})=>(isActive ? "px-2 py-2 rounded text-xs text-white bg-primary whitespace-nowrap" : "px-2 py-2 rounded text-xs text-[#000] bg-transparent whitespace-nowrap")}>Takealot Delivery Team</NavLink>
</div>

<div className='banner-container'>
<ReturnPolicyBanners />
</div>

<div className='tab-container'>
<ReturnPolicyTabs />
</div>

<div>
    <Outlet />
</div>
        </section>
    );
};

export default ReturnPolicyAndHelp;
