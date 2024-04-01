import React from 'react';
import { NavLink } from 'react-router-dom';

const CreditRefunds = () => {
    return (
        <div>
            <h2 className='text-xl font-semibold mb-5'>Credit & Refunds</h2>
            <div className='bg-white px-7 py-12 shadow-sm'>
                <h3 className='text-md font-semibold'>Available Credit</h3>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-2xl font-bold'>R O </h1>
                    </div>
                    <div>
                        <button className='px-5 py-3 rounded text-xs font-medium text-white bg-primary'>Redeem Gift Voucher</button>
                    </div>
                </div>
                <p className='text-sm'>Credit will be automatically applied to your next purchase.</p>
            </div>
            <div className="text-center space-y-4 bg-white shadow pt-6 pb-20 mt-4">
        <div className='justify-center items-center'>
          <ul className='flex gap-5 ms-5 text-black hover:text-blue-500 font-medium'>
            <NavLink to="/account/credits" className={({ isActive }) => (isActive ? " text-xs border-b-2 border-blue-500 py-2 text-primary" : "hover:text-blue-500 py-2  rounded-r-full bg-opacity-10 border-b-4 border-transparent text-xs text-[#5f5f60]")}>Credit History</NavLink>

            <NavLink to="/account/refundshistory" className={({ isActive }) => (isActive ? " text-[#5f5f60] text-xs border-b-2 border-blue-500 py-2" : "hover:text-blue-500 py-2  rounded-r-full bg-opacity-10 border-b-4 border-transparent text-xs text-[#5f5f60]")}>Refunds History</NavLink>


          </ul>
        </div>
        <div className='pt-28 pb-20'>
          <p className='text-sm'>You have no history available</p>
        </div>

      </div>
        </div>
    );
};

export default CreditRefunds;



