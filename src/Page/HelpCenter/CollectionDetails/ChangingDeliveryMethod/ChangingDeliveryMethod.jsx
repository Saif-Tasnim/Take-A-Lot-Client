import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';
import Accrodio from '../../../../components/Accordion/Accrodio';

const ChangingDeliveryMethod = () => {
    
    const accordion = [
        {
            path: "/help-centre/collectionDetails/track-my-collection-order",
            title: "Track my collection order"
        }
    ]

    return (
        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>
                <p className='py-4'>On select orders, we may be able to change your order from collect to delivery. If you want to request a change from collect to delivery, select Contact Us below to provide us with the required order information.

                </p>

                <p className='py-4'>
                    <b>Note:</b> It is not possible to change your selected Takealot Pickup Point once your order has been confirmed.

                </p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>

            {/* accordion part */}
            <h1 className='my-10 font-bold text-2xl'> Related Topics </h1>
            
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

export default ChangingDeliveryMethod;