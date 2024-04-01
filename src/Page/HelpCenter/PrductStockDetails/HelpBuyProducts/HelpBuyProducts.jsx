import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const HelpBuyProducts = () => {

    return (

        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>
                <p className='py-4'>
                    On the product page, you can identify a product sold by a third-party seller by the brand name followed by Fulfilled by Takealot.


                </p>

                <h1 className='py-3 font-bold'>Buying from a Third Party Seller is easy:   </h1>

                <p className='py-4'>
                    Buying products from Third Party Sellers works exactly the same as buying Takealot products. You can simply add the products to your cart then proceed to checkout and use any of Takealot’s available payment methods
                </p>

                <p className='py-4'>
                    Customer Service and Returns will be handled by Takealot as per our standard policies.    </p>

            </div>

            {/* contact part */}
            <SubContact></SubContact>
            
        </section>
    );
};

export default HelpBuyProducts;