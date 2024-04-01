import React from 'react';
import { HiHeart, HiQuestionMarkCircle, HiUserCircle } from 'react-icons/hi2';
import { IoIosCard, IoMdCart } from 'react-icons/io';
import { Link } from 'react-router-dom';

const MyAccountPage = () => {
    return (
       <section className='my-5 px-5'>
<h1 className='text-[#4d4d4f] text-2xl font-semibold mb-10'>My Account</h1>

<div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-5'>

    {/* Orders */}

<div className='bg-white px-6 py-8 shadow rounded-md w-full h-[200px]'>

<div className='w-full flex items-center justify-between mb-1'>
<p className='text-[#000] font-semibold'>Orders</p>
<p className='text-[#4d4d4f]'><IoMdCart className='h-7 w-7'/></p>
</div>

<div className='space-y-2 flex flex-col w-fit'>
<Link to="/account/orders" className='text-sm text-primary hover:border-b-2 hover:border-b-primary transition-all duration-200'>Orders</Link>
<Link to="/account/returns" className='text-sm text-primary hover:border-b-2 hover:border-b-primary transition-all duration-200'>Invoices</Link>
<Link to="/account/invoices" className='text-sm text-primary hover:border-b-2 hover:border-b-primary transition-all duration-200'>Returns</Link>
<Link to="/account/reviews" className='text-sm text-primary hover:border-b-2 hover:border-b-primary transition-all duration-200'>Product reviews</Link>
</div>

</div>


    {/* Payments & Credit */}

<div className='bg-white px-6 py-8 shadow rounded-md w-full h-[200px]'>

<div className='w-full flex items-center justify-between mb-1'>
<p className='text-[#000] font-semibold'>Payments & Credit</p>
<p className='text-[#4d4d4f]'><IoIosCard className='h-7 w-7'/></p>
</div>

<div className='space-y-2 flex flex-col w-fit'>
<Link to="/account/credits" className='text-sm text-primary hover:border-b-2 hover:border-b-primary transition-all duration-200'>Credit & Refunds</Link>
<Link to="/account/voucher" className='text-sm text-primary hover:border-b-2 hover:border-b-primary transition-all duration-200'>Redeem Gift Voucher</Link>
</div>

</div>


    {/* Customer Information */}

<div className='bg-white px-6 py-8 shadow rounded-md w-full h-[200px]'>

<div className='w-full flex items-center justify-between mb-1'>
<p className='text-[#000] font-semibold'>Customer Information</p>
<p className='text-[#4d4d4f]'><HiUserCircle className='h-7 w-7'/></p>
</div>

<div className='space-y-2 flex flex-col w-fit'>
<Link to="/account/personal-details" className='text-sm text-primary hover:border-b-2 hover:border-b-primary transition-all duration-200'>Personal Details</Link>
<Link to="/account/address-book" className='text-sm text-primary hover:border-b-2 hover:border-b-primary transition-all duration-200'>Address Book</Link>
<Link to="/account/newsletter" className='text-sm text-primary hover:border-b-2 hover:border-b-primary transition-all duration-200'>Newsletter Subscriptions</Link>
</div>

</div>


    {/* My Lists */}

    <div className='bg-white px-6 py-8 shadow rounded-md w-full h-[200px]'>

<div className='w-full flex items-center justify-between mb-1'>
<p className='text-[#000] font-semibold'>My Lists</p>
<p className='text-[#4d4d4f]'><HiHeart className='h-7 w-7'/></p>
</div>

<div className='space-y-2 flex flex-col w-fit'>
<Link to="/wishlist" className='text-sm text-primary hover:border-b-2 hover:border-b-primary transition-all duration-200'>My Lists</Link>
<Link to="/create-wishlist" className='text-sm text-primary hover:border-b-2 hover:border-b-primary transition-all duration-200'>Create a List</Link>

</div>

</div>


    {/* Support */}

    <div className='bg-white px-6 py-8 shadow rounded-md w-full h-[200px]'>

<div className='w-full flex items-center justify-between mb-1'>
<p className='text-[#000] font-semibold'>Support</p>
<p className='text-[#4d4d4f]'><HiQuestionMarkCircle className='h-7 w-7'/></p>
</div>

<div className='space-y-2 flex flex-col w-fit'>
<Link to="/help-centre" className='text-sm text-primary hover:border-b-2 hover:border-b-primary transition-all duration-200'>Help Center</Link>

</div>

</div>

</div>

       </section>
    );
};

export default MyAccountPage;