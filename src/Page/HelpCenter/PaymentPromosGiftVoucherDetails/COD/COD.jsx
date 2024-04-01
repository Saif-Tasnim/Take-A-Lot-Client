import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const COD = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white p-8 text-sm'>
                <p className='py-4'>Cash on delivery (COD) is offered as a payment option for select orders, delivered within certain geographical areas, and on selected products based on value. It will appear as an available payment option at checkout if your order qualifies.
                </p>

                <p className='py-4'> <b>Important:</b> Currently we only accept cash payments when the Cash on Delivery option is selected. Credit and Debit Card or any other digital payments won’t be accepted on delivery.
                </p>

                <h1 className='font-bold py-4'> How it works </h1>
                <p className='py-4'>
                    When an item is marked <b>‘Eligible for Cash on Delivery’</b> on a product page, it means you can pay for this item with cash when your driver delivers your goods.
                </p>
                <p className='py-4'>
                    If your whole order is eligible for COD, it will be displayed as a payment option for you to select at checkout.
                </p>
                <p className='py-4'>
                    There are certain exclusions that apply to COD orders and if the option is not available in checkout it will not be eligible for that order.
                </p>
                <p className='py-4'>
                    We don’t offer COD for any orders that:
                </p>

                <ul className='list-[dash] py-4'>
                    <li className='py-3'> include <b>digital products</b> (e.g. Gift vouchers or airtime)</li>
                    <li className='py-3'> include customised products (e.g. a sports shirt printed with a personalised name) </li>
                    <li className='py-3'> Orders totaling less than R100 or more than R3,000</li>
                    <li className='py-3'> will be collected from our warehouse</li>
                    <li className='py-3'> ibeing delivered to an address falling outside of our Takealot Delivery Team area</li>
                    <li className='py-3'> Accounts that do not have a verified South African mobile number </li>
                </ul>

            </div>

            {/* contact part */}
            <SubContact></SubContact>
        </section>
    );
};

export default COD;