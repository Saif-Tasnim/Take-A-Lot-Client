import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const ItemStock = () => {
    return (

        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>
                <p className='py-4'>
                    All out-of-stock products will be restocked as soon as more stock becomes available. You can add an out-of-stock product to your wish list to be notified when it is back in stock by clicking <b>Add to Wishlist</b> on the product page of the specific product.
                </p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>

        </section>
    );
};

export default ItemStock;