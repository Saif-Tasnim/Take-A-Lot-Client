import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const AllowChildren = () => {
    return (
        <section className='w-[82%]'>
            
            <div className='bg-white text-sm p-8'>

                <p className='py-4'>In line with our Terms and Conditions, any person under the age of 18 years is not permitted to use our platforms without the involvement or supervision of a parent or legal guardian.
                </p>

                <p className='py-4'>We may verify your age. If you are under 18 years we will require proof that you have the necessary consent or involvement of your parent or legal guardian.
                </p>

            </div>

            {/* contact part */}
            <SubContact></SubContact>
       
        </section>
    );
};

export default AllowChildren;