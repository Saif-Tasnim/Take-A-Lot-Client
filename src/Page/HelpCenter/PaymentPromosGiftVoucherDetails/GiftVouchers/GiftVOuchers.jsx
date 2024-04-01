import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const GiftVOuchers = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white p-8 text-sm'>
                <p className='py-4'>
                    A great option for wedding gifts, special anniversaries, and big birthday occasions.
                </p>

                <p className='py-4'>
                    A Takealot Gift Voucher is deemed valid if it has not yet been used or passed its expiry date. Gift Vouchers purchased on Takealot are valid for three years after sale.
                </p>

                <h1>How to Redeem your Gift Voucher: </h1>

                <ul className='list-disc py-3'>
                    <li className='py-3'>
                        Login with your existing email address and user password
                    </li>

                    <li className='py-3'>
                        Go to <b>My Account</b>
                    </li>

                    <li className='py-3'>
                        Click on <b>Enter A Gift Voucher Code</b>
                    </li>

                    <li className='py-3'>
                        Enter the code on your voucher and click ‘Claim Voucher’. Once you’ve successfully entered the code the amount of the voucher will be loaded as a credit on your Takealot account.
                    </li>

                    <li className='py-3'>
                        Credit will automatically be used when you checkout next time on the Takealot website. When shopping on the Mobile App you need to select credit as your payment method
                    </li>

                    <li className='py-3'>
                        Purchased Gift Vouchers are valid for three years from the date of sale.
                    </li>

                    <li className='py-3'>
                        Note that different rules apply to Promotional Coupons and discounts
                    </li>
                </ul>

                <p className='py-4'>
                    Alternatively, you can also redeem the Gift Voucher during the checkout process by entering your code in the designated field.
                </p>

            </div>

            {/* contact part */}
            <SubContact></SubContact>
        </section>
    );
};

export default GiftVOuchers;