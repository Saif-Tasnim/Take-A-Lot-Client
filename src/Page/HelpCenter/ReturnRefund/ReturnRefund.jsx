import React from 'react';
import SubContact from '../../../components/SubContact/SubContact';
import { Link } from 'react-router-dom';

const ReturnRefund = () => {
    return (
        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>

                <p className='py-2'>A refund will only be processed after your product has been received and evaluated by our returns team. Once your item has been evaluated, the refund process is dependent on the order’s original payment method.</p>

                <p className='py-5'>If you paid with <b> Credit & Debit Card, eBucks, Nedbank Personal Loan, Discovery Miles, Mobicred</b>, your refund will be processed via the original payment method used for your order. Funds can take up to 3-5 business days to reflect in your account and are subject to your bank or payment provider’s processing times.

                </p>

                <p className='py-5'>If you paid with <b>PayFast, Ozow, NSFAS / Cellbux Wallet, Cash on Delivery or MasterPass</b>, you will be granted Takealot credit and have the option to convert that credit into an EFT refund. You will be notified once your Takealot account has been credited, thereafter you can proceed with the steps below.</p>

                <p className='py-5'>To process your EFT refund: </p>

                <ol className='list-decimal'>
                    <li><span className="hidden lg:block breadcrumbs py-3">
                        <ul>
                            <li>Go to My Account</li>
                            <li><Link className='text-blue-500'> Returns </Link></li>
                        </ul>
                    </span></li>

                    <li className='pb-3'>Select the <b>‘Refund My Credit’</b> button
                    </li>
                    <li className='pb-3'>Follow the on-screen prompts</li>
                </ol>

            </div>

            {/* contact part */}
            <SubContact></SubContact>

        </section>
    );
};

export default ReturnRefund;