import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';
import Accrodio from '../../../../components/Accordion/Accrodio';

const WhyCancelOrder = () => {

    const accordion = [{
        path: "",
        title: "How do I get a refund instead of a credit ?"
    }]

    return (
        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>
                <p className='py-5'>There are 3 main reasons why your order may need to be cancelled.</p>

                <h1 className='py-6 font-bold'>Payment not Received</h1>
                <p className='py-4'>All our payment methods require payment to be made at checkout, excluding Cash on Delivery (COD). If you do not complete payment within 24 hours, your order will automatically be cancelled.

                </p>

                <h1 className='py-6 font-bold'>Stock Constraints</h1>
                <p className='py-4'>While we make every effort to make sure our stock information is accurate when you place an order, occasionally suppliers may run out of stock after an order has been placed.
                </p>

                <h1 className='py-6 font-bold'>Unable to Deliver Your Order</h1>
                <p className='py-4'>An SMS will be sent to you confirming your scheduled delivery date before each delivery attempt. We will automatically reschedule your delivery, contact you via email or telephone to confirm a new date if you were not available for delivery. If after 2 unsuccessful delivery attempts, we are still unable to reach you, your delivery will be cancelled.
                </p>

                <p className='py-4'>If your order has been cancelled, credit will be applied for the amount you have already paid. If you would prefer a refund, visit Credit and Refunds

                </p>

            </div>

            {/* contact part */}
            <SubContact></SubContact>
            {/* Accordion */}
            <h1 className='my-14 font-bold text-2xl'> Related Topics </h1>
            {
                accordion.map((acc, index) => <Accrodio
                    key={index}
                    path={acc.path}
                    title={acc.title}
                ></Accrodio>)
            }

        </section>
    );
};

export default WhyCancelOrder;