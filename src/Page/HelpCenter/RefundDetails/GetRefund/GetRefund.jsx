import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';
import { Link } from 'react-router-dom';

const GetRefund = () => {
    return (
        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>
                <p className='py-4'>Refunds will be processed via the original payment method used for your original order(s). If you paid by EFT using PayFast, Ozow, NSFAS/ Cellbux, Masterpass or you paid with Cash on Delivery (COD), you will need to provide your banking details during the refund process.

                </p>

                <p className='py-4'>You can request a refund by going to  <span className="hidden lg:block breadcrumbs">
                    <ul>
                        <li>Go to My Account</li>
                        <li><Link className='text-blue-500'> Credit & Refund </Link></li>
                    </ul>
                </span>

                </p>

                <p className='py-4'>Once your refund request has been processed, funds may take 3–5 business days to reflect in your account and are subject to your bank's processing times.

                </p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>

        </section>
    );
};

export default GetRefund;