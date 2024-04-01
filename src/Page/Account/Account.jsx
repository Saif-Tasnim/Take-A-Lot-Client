import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Account = () => {
    return (
        <section className='lg:px-5 flex gap-10 my-14'>
<div className='hidden lg:block py-3 rounded shadow bg-white w-[35%]'>
<p className='text-base font-semibold text-[#000] px-5'>My Account</p>
<div className='border-b py-1'></div>

<div className='order-container my-3'>
<div className='px-5 flex items-center gap-2'>
    <div className='bg-gray-200 px-1 py-1 rounded-full'>
    <img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22%3E%3Cpath fill=%22rgb(77,77,79)%22 d=%22M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z%22/%3E%3Cpath d=%22M0 0h24v24H0z%22 fill=%22none%22/%3E%3C/svg%3E" alt="Cart" />
    </div>
    <p className='text-base font-semibold text-[#000]'>Orders</p>

</div>

<div className='flex flex-col gap-2 my-3'>
<NavLink to="/account/orders" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-10 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-[#5f5f60] text-xs" : "bg-transparent hover:bg-gray-100 w-[90%] pl-10 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent text-xs text-primary")}>Orders</NavLink>

<NavLink to="/account/invoices" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-10 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-[#5f5f60] text-xs" : "bg-transparent hover:bg-gray-100 w-[90%] pl-10 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent text-xs text-primary")}>Invoices</NavLink>

<NavLink to="/account/returns" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-10 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-[#5f5f60] text-xs" : "bg-transparent hover:bg-gray-100 w-[90%] pl-10 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent text-xs text-primary")}>Returns</NavLink>

<NavLink to="/account/reviews" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-10 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-[#5f5f60] text-xs" : "bg-transparent hover:bg-gray-100 w-[90%] pl-10 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent text-xs text-primary")}>Product Reviews</NavLink>
</div>

</div>
<div className='border-b py-1'></div>


<div className='paymentCredit-container my-3'>
<div className='px-5 flex items-center gap-2'>
    <div className='bg-gray-200 px-1 py-1 rounded-full'>
    <img src="data:image/svg+xml,%3Csvg fill=%22rgb(77,77,79)%22 xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22%3E%3Cpath fill=%22none%22 d=%22M0 0h24v24H0V0z%22/%3E%3Cpath d=%22M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-1 14H5c-.55 0-1-.45-1-1v-5h16v5c0 .55-.45 1-1 1zm1-10H4V6h16v2z%22/%3E%3C/svg%3E" alt="Cart" />
    </div>
    <p className='text-base font-semibold text-[#000]'>Payments & Credit</p>

</div>

<div className='flex flex-col gap-2 my-3'>
<NavLink to="/account/credits" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-10 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-[#5f5f60] text-xs" : "bg-transparent hover:bg-gray-100 w-[90%] pl-10 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent text-xs text-primary")}>Credit & Refunds</NavLink>

<NavLink to="/account/voucher" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-10 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-[#5f5f60] text-xs" : "bg-transparent hover:bg-gray-100 w-[90%] pl-10 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent text-xs text-primary")}>Redeem Gift Voucher</NavLink>
</div>

</div>
<div className='border-b py-1'></div>


<div className='paymentCredit-container my-3'>
<div className='px-5 flex items-center gap-2'>
    <div className='bg-gray-200 px-1 py-1 rounded-full'>
    <img src="data:image/svg+xml,%3Csvg fill=%22rgb(77,77,79)%22 xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z%22/%3E%3Cpath d=%22M0 0h24v24H0z%22 fill=%22none%22/%3E%3C/svg%3E" alt="Cart" />
    </div>
    <p className='text-base font-semibold text-[#000]'>Customer Information</p>

</div>

<div className='flex flex-col gap-2 my-3'>
<NavLink to="/account/personal-details" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-10 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-[#5f5f60] text-xs" : "bg-transparent hover:bg-gray-100 w-[90%] pl-10 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent text-xs text-primary")}>Personal Details</NavLink>

<NavLink to="/account/address-book" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-10 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-[#5f5f60] text-xs" : "bg-transparent hover:bg-gray-100 w-[90%] pl-10 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent text-xs text-primary")}>Address Book</NavLink>


<NavLink to="/account/newsletter" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-10 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-[#5f5f60] text-xs" : "bg-transparent hover:bg-gray-100 w-[90%] pl-10 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent text-xs text-primary")}>Newsletter Subscriptions</NavLink>
</div>

</div>
<div className='border-b py-1'></div>



<div className='paymentCredit-container my-3'>
<div className='px-5 flex items-center gap-2'>
    <div className='bg-gray-200 px-1 py-1 rounded-full'>
    <img src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M0 0h24v24H0z%22 fill=%22none%22/%3E%3Cpath fill=%22rgb(95,95,96)%22 d=%22M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z%22/%3E%3C/svg%3E" alt="Cart" />
    </div>
    <p className='text-base font-semibold text-[#000]'>My Lists</p>

</div>

<div className='flex flex-col gap-2 my-3'>
<NavLink to="/wishlist" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-10 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-[#5f5f60] text-xs" : "bg-transparent hover:bg-gray-100 w-[90%] pl-10 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent text-xs text-primary")}>My Lists</NavLink>

</div>

</div>


</div>

<div className='w-full'>
<Outlet />
</div>
        </section>
    );
};

export default Account;