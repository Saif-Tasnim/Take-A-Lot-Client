import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const CouponDiscount = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white p-8 text-sm'>
                <p>There are two types of Coupons offered at Takealot: </p>

                <ul className='list-disc py-4'>
                    <li className='py-3'>
                        a Coupon with a fixed amount of a discount, e.g. R100 off (“Fixed Coupon“),
                    </li>
                    <li className='py-4'>
                        a Coupon with a percentage discount, e.g. 10% off (“Percentage Coupon“).
                    </li>
                </ul>

                <p>Coupons have specific terms and conditions regulating when and how they may be used, such as minimum spend, qualifying product purchases and the expiry date.
                </p>

                <h1 className='font-bold py-4'> How it works </h1>

                <ul className='list-disc py-4'>
                    <li className='py-3'>
                        Each Coupon can only be used once;
                    </li>

                    <li className='py-3'>
                        Only one Coupon can be used per order;
                    </li>

                    <li className='py-3'>
                        Only one Coupon can be used on the website per person per promotion/campaign;
                    </li>

                    <li className='py-3'>
                        Percentage Coupons may only be used on purchases with a total cart value of less than R5,000;
                    </li>

                    <li className='py-3'>
                        If a Percentage Coupon has been used and you wish to cancel any items in the order prior to making payment, the entire order must be cancelled. You will be issued with a new Percentage Coupon and will need to replace the order.
                    </li>

                    <li className='py-3'>
                        Coupons cannot be used to buy Gift Voucher or other Coupons, and cannot be exchanged or refunded for cash or credit.
                    </li>

                    <li className='py-3'>
                        If you choose to cancel or return an item and you paid using a coupon discount, you will be reissued a new coupon to the value of the discount paid when using your coupon during checkout.
                    </li>

                    <li className='py-3'>
                        See below how to redeem your coupon code in the Promo Code field on the payment options page at checkout.
                    </li>
                </ul>

                <p className='py-4'>PLEASE NOTE: Gift Vouchers work differently to coupons. To find out more about Gift vouchers see our related articles below.</p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>
        </section>
    );
};

export default CouponDiscount;