import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const ItemPriceChange = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>
                <p className='py-4'>
                    Daily Deals and other discounted items have limited stock and these offers are available for a limited time only. Once these offers sell out or expire, the items will revert to their pre-deal or discounted price.
                </p>
                <p className='py-4'>
                    Occasionally, where the limited deal-priced stock of an item sells incredibly fast, the product page price might take a short time to update, but the price displayed in your cart summary when you check out will always be the correct and final price of the product. Always double check your final cart summary before checking out.
                </p>
                <p className='py-4'>
                    Deals and discounted prices are only secured through payment and not by adding them to your cart. We’re only able to honour deal and discount prices for the amount of stock that was made available for these offers.
                </p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>
        </section>
    );
};

export default ItemPriceChange;