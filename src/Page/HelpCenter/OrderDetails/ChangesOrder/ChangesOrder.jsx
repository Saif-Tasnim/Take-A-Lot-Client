import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';
import Accrodio from '../../../../components/Accordion/Accrodio';

const ChangesOrder = () => {

    const accordion = [
        {
            path: "/help-centre/deliveryDetails/reschedule-delivery",
            title: "Reschedule your delivery"
        },
        {
            path: "/help-centre/deliveryDetails/change-delivery-address",
            title: "Change your delivery address"
        },
        {
            path: "/help-centre/deliveryDetails/split-requests",
            title: "Split delivery request"
        },
        {
            path: "/help-centre/deliveryDetails/can-i-change-my-order-from-delivery-to-collect",
            title: "Can I change my order from delivery to collect ?"
        },
        {
            path: "/help-centre/orderCancelDetails/how-do-i-cancel-an-order",
            title: "How do I cancel order ? "
        },
    ]

    return (
        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>
                <p className='py-5'>It is not possible to add or remove items in your order. On selected orders, we could make changes to your scheduled delivery date, delivery address, shipping method or assist with an order item cancellation.</p>

                <p className='py-5'>If you have received your delivery or collection notification SMS and wish to cancel your order, select the Contact Us button below.

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

export default ChangesOrder;