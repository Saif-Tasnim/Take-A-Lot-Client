import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const WhyCollectionNotAvailable = () => {
    return (
        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>
                <p className='py-4'>Certain items, such as Liquor and Heavy / Bulky Goods, are not eligible for collection. These items need to be delivered to a home or business address via our delivery method at a R200 surcharge per Heavy / Bulky Good item.

                </p>
            </div>

            {/* Contact Part */}
            <SubContact></SubContact>
        </section>
    );
};

export default WhyCollectionNotAvailable;