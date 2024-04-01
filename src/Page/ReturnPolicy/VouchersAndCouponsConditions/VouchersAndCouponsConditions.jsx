import React from 'react';
import { Link } from 'react-router-dom';

const VouchersAndCouponsConditions = () => {
    return (

<section className='content-container lg:px-10 px-2 text-sm'>

<div className='space-y-3 text-xs my-3'>
 <p className='text-[#000] text-lg font-semibold'>GENERAL</p>
 <p>Takealot may from time to time make physical or electronic gift vouchers (“<span className='font-medium'>Gift Vouchers</span>”) and promotional coupons or discounts (“<span className='font-medium'>Coupons</span>”) available for use on the Website towards the purchase of Takealot products. Gift Vouchers and Coupons can only be redeemed while they are valid and their expiry dates cannot be extended. More specifically:</p>

<p><strong>Gift Vouchers</strong></p>
<ul className='pl-8 space-y-2 list-decimal'>
<li>Gift Vouchers that are purchased by registered users are valid for 3 years after Sale. Gift Vouchers that Takealot gives away for free are valid for the period stated thereon. In each case, if your Gift Voucher has not been used within that period, it will expire.</li>
<li>Gift Vouchers cannot be used to buy other Gift Vouchers or Coupons. They do not accrue interest and are not refundable for cash once purchased or otherwise obtained. If your Gift Voucher value is less than the amount required to cover the full order you wish to place, you may make up the difference by paying via one of our other payment methods.</li>
<li className='text-[#000] font-medium'>Takealot is not responsible for any harm due to the loss, unauthorised use or unauthorised distribution of a Gift Voucher, after Takealot has delivered the Gift Voucher to you, or the email address nominated by you.</li>

</ul>


<p><strong>Coupons</strong></p>
<ul className='pl-8 space-y-2 list-decimal'>
<li>There are two types of Coupons: a Coupon with a fixed amount of a discount, e.g. R100 off (“<span className='font-medium'>Fixed Coupon</span>“), and a Coupon with a percentage discount, e.g. 10% off (“<span className='font-medium'>Percentage Coupon</span>“).</li>
<li>Coupons are issued in Takealot’s sole discretion and we are entitled at any time to correct, cancel or reject a Coupon for any reason (including without limitation where a Coupon has been distributed in an unauthorised manner). Users do not have a right to Coupons, and Coupons cannot be earned. Coupons are issued under specific terms and conditions regulating when and how they may be used.</li>
<li>As a general rule, and unless specified otherwise on the specific Coupon itself:

<ul className='pl-5 space-y-2 list-disc'>
<li>each Coupon can only be used once;</li>
<li>only one Coupon can be used per order;</li>
<li>only one Coupon can be used on the website per person per promotion/campaign;</li>
<li>Percentage Coupons may only be used on purchases with a total cart value of less than R5,000;</li>
<li>where a Percentage Coupon has been used and you wish to cancel any items in the order prior to making payment, the entire order must be cancelled. You will be issued with a new Percentage Coupon and will need to place the order again, without the items that you wished to cancel;</li>
<li>a Coupon must be used at check-out – it cannot be used later on existing orders; and</li>
<li>the value of the Coupon will be set off against the value of your shopping basket and the balance remaining, if any, will be payable by you.</li>
</ul>

</li>
<li>Coupons cannot be used to buy Gift Voucher or other Coupons, and cannot be exchanged or refunded for cash or credit. <span className='text-[#000] font-medium'>Takealot is not responsible for any harm due to the loss, unauthorised use or distribution of a Coupon</span></li>
<li>If for any reason a Coupon does not reflect in the final amount due from you at check-out,  please get in touch with us via our help centre here, to confirm if the Coupon is still valid. If Takealot confirms that the Coupon is still valid and you have already placed your order, you can choose whether to cancel the order and place it again with the Coupon, or you can use the Coupon on your next order within the limitations of the specific Coupon’s terms and conditions.</li>
<li>You may be required to submit the original communication containing the Coupon code, and any other information reasonably requested by Takealot, before you are able to use a Coupon.</li>

</ul>
</div>


<div className='space-y-3 text-xs my-3'>
 <p className='text-[#000] text-lg font-semibold'>RETURNS AND CANCELLATIONS</p>
 <p>Where you have used a Fixed Coupon to pay for an order, and you or Takealot later cancels your order (or part thereof) prior to delivery of the relevant product(s), or you log a return of one or more products for a credit in accordance with the Returns Policy, the value of the Fixed Coupon will be deducted off the purchase price of the cancelled or returned product(s) (as applicable), and we will credit your account for the balance, if any (or refund you if that is your preference). We will also provide you with a replacement Fixed Coupon of the same value as the original Fixed Coupon used. Takealot may in its sole discretion impose restrictions on the use of the replacement Fixed Coupon.  For any subsequent cancellations or returns arising out of the same order, we will credit your account as normal with the value of the returned product (or refund you if that is your preference).</p>
 <p>Where you have used a Percentage Coupon  to pay for an order, and you or Takealot later cancels your order (or part thereof) prior to delivery of the relevant product(s), or you log a return of one or more products for a credit in accordance with the Returns Policy, the value of the discount received using the Percentage Coupon will be deducted off the purchase price of the cancelled or returned product(s) (as applicable), and we will credit your account for the balance, if any (or refund you if that is your preference). We will also provide you with a replacement Fixed Coupon of the same value as the discount received using the original Percentage Coupon. Takealot may in its sole discretion impose restrictions on the use of the replacement Fixed Coupon. For any subsequent cancellations or returns arising out of the same order, we will credit your account as normal with the value of the returned product (or refund you if that is your preference).</p>

 <p className='font-medium text-sm'> Click <Link className='text-primary'>HERE</Link> for instructions on how to use/redeem a promotional code or coupon.</p>




</div>
</section>
    );
};

export default VouchersAndCouponsConditions;