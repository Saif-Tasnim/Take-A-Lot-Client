import React from 'react';
import SubContact from '../../../components/SubContact/SubContact';
import Accrodio from '../../../components/Accordion/Accrodio';

const ReturnCancel = () => {
    const accordion = [
        {
            path: "/help-centre/returnDetails/reschedule-collection",
            title: "Reschedule my return collection"
        }
    ]

    return (

        <section className='w-[82%]'>

            <div className='text-sm bg-white p-8'>
                
                <p>Your return can be canceled if it has not been collected / dropped off at a Takealot Pickup Point.

                </p>

                <p className='py-5'>To cancel your return, contact us via the Contact Us button below, or call us on 087 362 7500.

                </p>
            
            </div>


            {/* contact part */}
            <SubContact></SubContact>

            {/* accordion part */}
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

export default ReturnCancel;