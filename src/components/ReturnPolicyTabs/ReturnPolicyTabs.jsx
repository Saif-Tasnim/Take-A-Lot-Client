import React from 'react';
import { NavLink } from 'react-router-dom';

const ReturnPolicyTabs = () => {
    return (
<section className='my-5 lg:px-5 px-2'>
<div className='border-t border-b pb-2 flex items-center gap-0 overflow-x-auto'>
<NavLink to="/return-policy-help/" className={({isActive})=>(isActive ? "px-4 py-2 text-sm text-[#4c4d4f] bg-transparent whitespace-nowrap border-t-[6px] border-primary" : "px-4 py-2 text-sm text-[#000] bg-transparent whitespace-nowrap hover:border-t-[6px] hover:border-[#4c4d4f]")}>Return Policy</NavLink>

<NavLink to="/return-policy-help/terms-and-conditions" className={({isActive})=>(isActive ? "px-4 py-2 text-sm text-[#4c4d4f] bg-transparent whitespace-nowrap border-t-[6px] border-primary" : "px-4 py-2 text-sm text-[#000] bg-transparent whitespace-nowrap border-t-[6px] border-transparent hover:border-[#54555796]")}>T&Cs</NavLink>

<NavLink to="/return-policy-help/savealot-daily-deals" className={({isActive})=>(isActive ? "px-4 py-2 text-sm text-[#4c4d4f] bg-transparent whitespace-nowrap border-t-[6px] border-primary" : "px-4 py-2 text-sm text-[#000] bg-transparent whitespace-nowrap border-t-[6px] border-transparent hover:border-[#54555796]")}>Daily Deals</NavLink>

<NavLink to="/return-policy-help/promotional-codes-tcs" className={({isActive})=>(isActive ? "px-4 py-2 text-sm text-[#4c4d4f] bg-transparent whitespace-nowrap border-t-[6px] border-primary" : "px-4 py-2 text-sm text-[#000] bg-transparent whitespace-nowrap border-t-[6px] border-transparent hover:border-[#54555796]")}>Gift Vouchers and Coupons T&Cs</NavLink>

<NavLink to="/return-policy-help/responsible-disclosure-policy" className={({isActive})=>(isActive ? "px-4 py-2 text-sm text-[#4c4d4f] bg-transparent whitespace-nowrap border-t-[6px] border-primary" : "px-4 py-2 text-sm text-[#000] bg-transparent whitespace-nowrap border-t-[6px] border-transparent hover:border-[#54555796]")}>Responsible Disclosure</NavLink>

<NavLink to="/return-policy-help/privacy-policy" className={({isActive})=>(isActive ? "px-4 py-2 text-sm text-[#4c4d4f] bg-transparent whitespace-nowrap border-t-[6px] border-primary" : "px-4 py-2 text-sm text-[#000] bg-transparent whitespace-nowrap border-t-[6px] border-transparent hover:border-[#54555796]")}>Privacy Policy</NavLink>
</div>
</section>
    );
};

export default ReturnPolicyTabs;