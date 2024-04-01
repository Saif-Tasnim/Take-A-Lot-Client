import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';
import Accrodio from '../../../../components/Accordion/Accrodio';

const CancelOrder = () => {

    const accordion = [
        {
            path: "",
            title: "Can I make changes to my order after it has been placed ? "
        },
        {
            path: "/help-centre/deliveryDetails/track-order",
            title: "Track your order"
        },
        {
            path: "",
            title: "Track my collection order"
        },

    ]

    return (
        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>

                <p className='py-4'>You can cancel an order if you have not yet paid for it.</p>

                <p className='py-4'>If you <b>have already paid</b> for your order, contact us below to check if your order is eligible for cancellation. </p>

                <p className='py-4'>If you <b>have not yet paid</b> for your order, go to your Orders page, select the order you would like to cancel and click the ‘Cancel Order’ button. </p>
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

export default CancelOrder;