import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const MoreInformation = () => {

    return (

        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>
                <p className='py-4'>
                    You can find details for each product on the product page. This can be found in the <b> Description </b> and <b>Production Information</b> sections of the page. This will include features as well as specifications which will provide you with dimensions and weights.


                </p>

                <p className='py-4'>
                    If you need more detailed information on a specific product, please select Contact Us below.
                </p>

            </div>

            {/* contact part */}
            <SubContact></SubContact>

        </section>
    );
};

export default MoreInformation;