import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const DiscoveryMiles = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>
                <p className='py-4'>
                    Discovery Miles is a reward system offered to Discovery customers which you can use to spend and pay on Takealot.
                </p>
                <p className='py-4'>
                    When you’re ready to check out, simply choose to pay using your Discovery Miles. We’ll then send you over to the Discovery Miles payment page (powered by PayU) where you can use your hard-earned miles to pay (minimum R20 order).
                </p>

                <p className='py-4'>
                    All you need is your Discovery Miles username & password.
                </p>

                <p className='py-4'>
                    <b>Important: </b> Discovery does not allow the purchase of virtual products by means of Discovery Miles. These virtual products include (but are not limited to) airtime or data vouchers, gift vouchers, gaming network vouchers, or codes.
                </p>

                <h1 className='font-bold py-4'> Part-pay using Discovery Miles and Rands </h1>

                <p className='py-4'> We also give you the choice to pay for your whole order using your Discovery Miles (if you’ve got enough of course) OR you can choose to pay with both Rands and Discovery Miles. Rands must be paid using any South African Visa or Mastercard credit card. The power is in your hands, folks! </p>

            </div>

            {/* contact part */}
            <SubContact></SubContact>

        </section>
    );
};

export default DiscoveryMiles;