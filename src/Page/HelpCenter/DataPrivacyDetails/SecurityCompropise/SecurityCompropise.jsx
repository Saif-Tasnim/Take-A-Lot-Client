import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const SecurityCompropise = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>
                <p className='py-4'>We have implemented internal processes and policies to address all personal information security compromises in line with our obligations under POPIA.
                </p>

                <p className='py-4'>We commit to investigating the personal information security compromise and put in place measures to mitigate any further risks and unauthorised access to your personal information. Where you believe your personal information may have been compromised, please do not hesitate to Contact Us below.
                </p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>
        </section>
    );
};

export default SecurityCompropise;