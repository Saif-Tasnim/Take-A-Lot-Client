import React from 'react';
import SubContact from '../../../components/SubContact/SubContact';
import Accrodio from '../../../components/Accordion/Accrodio';

const ChangeReturnAddress = () => {

    const accordion = [
        {
            path: "/help-centre/returnDetails/reschedule-collection",
            title: "Reschedule my return collection"
        }
    ]
    return (
        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>
                <p> We are <b> unable to change </b> an address after your return has been logged. We would need to cancel your return and log a new return with the new address. If you would like to go ahead and cancel the return, please select Contact Us below.</p>

                <p className='py-7'> Alternatively, if you are available at the current collection address at a later date, please contact us on 087 362 7500 or select Contact Us below to reschedule your return.

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

export default ChangeReturnAddress;