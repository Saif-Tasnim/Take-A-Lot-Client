import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const PaymentConfirmation = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>
                <p className='py-4'>
                    You’ll receive your payment confirmation email once we’ve received payment.
                </p>

                <p className='py-4'>
                    To check if your order and payment has been processed successfully, go to My Account and select <b>Orders</b>
                </p>

                <p className='py-4'>
                    If you have already paid, but your order is still showing <b>Awaiting Payment</b>, please contact us below.
                </p>

            </div>

            {/* contact part */}
            <SubContact></SubContact>
        </section>
    );
};

export default PaymentConfirmation;