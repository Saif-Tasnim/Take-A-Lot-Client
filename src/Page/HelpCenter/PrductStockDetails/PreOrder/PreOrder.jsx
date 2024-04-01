import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const PreOrder = () => {
    return (
        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>
                <p className='py-4'>
                    Pre-ordering allows you to place orders for products that have not yet been released. For example, certain electronics, gaming titles or books. When you place the pre-order, we will order the product in advance from our suppliers.

                </p>

                <p className='py-4'>
                    The following rules apply when placing orders for Pre-order products:     </p>

                <ul className='list-disc py-3'>
                    <li className='py-2'>Pre-order products can only be ordered individually and may not be ordered with other products in the same order.
                    </li>

                    <li className='py-2'>Multiple varieties of pre-order products cannot be ordered in one order.
                    </li>

                    <li className='py-2'>If the price of a product is dropped prior to the release of a product, we will credit the difference and you can request for a refund.
                    </li>

                    <li className='py-2'>Pre -orders can be cancelled prior to the release date if the order has not been prepared for shipping to your delivery address or selected Takealot pickup point for collection.
                    </li>

                </ul>

                <p className='py-4'>
                    <b> Note : </b> Release dates are subject to change without prior notice. We will inform you of any potential changes or delays.
                </p>

            </div>

            {/* contact part */}
            <SubContact></SubContact>

        </section>
    );
};

export default PreOrder;