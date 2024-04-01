import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const RefundTime = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>
                <p className='py-4'>Refunds are usually processed within 3 - 5 working days after receiving email confirmation, depending on your bank's processing times.

                </p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>
        </section>
    );
};

export default RefundTime;