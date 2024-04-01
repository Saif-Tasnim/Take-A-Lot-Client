import React from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';

const ReturnPolicy = () => {

    return (
<section  className='content-return-policy lg:px-10 px-2 text-sm'>

<div className='space-y-3 mb-7'>
<p className='text-[#4d4d4f] text-lg font-bold'>Standard Returns Policy</p>
<p>We want you to be happy with your purchase. If you are not completely satisfied, you can return the product to us and we will either repair/replace it, or credit your account, subject to the below terms. This Policy applies to products bought from Takealot itself and from Third Party Sellers. Please note Online Course Codes are dealt with separately in section 5 below.</p>
<p className='text-xs'>Please note that Takealot may, from time to time and at its discretion, restrict the use of the credit in your account in respect of certain products.</p>
<p className='text-xs'>Certain parts of this Policy do not apply to Unboxed Deals, reconditioned products or used products, and this is indicated in the relevant sections below. Unboxed Deals are returned products that are offered for sale at discounted prices, because their original packaging is damaged, unsealed or missing, or the products show signs of handling and/or re-packaging.</p>
<p className='text-xs'>This Policy forms part of the Takealot Terms and Conditions, and so words defined in the Terms and Conditions have the same meaning in this Policy, unless the context indicates otherwise. Nothing in this Policy is intended to limit your statutory rights in any way.</p>

</div>


<div className='space-y-3 text-xs'>
    <p className='text-[#000] font-semibold text-base'>Preparing your products for a return</p>

<p>To ensure your request is processed as quickly as possible you are responsible for the following when returning your products;</p>

<ul className='my-2 pl-8 list-disc space-y-2'>
    <li>package your products safely and securely for protection during transit;</li>
    <li>clearly mark your return reference number on the outside of the parcel; and</li>
    <li>include all accessories and parts that were sold with the product.</li>
</ul>
<p>Failure to adhere to any of these requirements could delay the processing of your request or result in its decline altogether.</p>
</div>

<div className='space-y-3 text-xs my-3'>
 <p className='text-[#4d4d4f] text-lg font-bold'>1: Unwanted products</p>
    <p>You can return an unwanted product to us at no charge, provided:</p>

    <ul className='my-2 pl-8 list-disc space-y-2'>
<li>it is <span className='font-medium'>undamaged and unused</span>, with the original labels and stickers still attached;</li>
<li>save in relation to Unboxed Deals, reconditioned products and used products, it is in the <span className='font-semibold text-[#000]'>original packaging</span>, which must be undamaged and in its original condition with all seals still intact (if applicable). Please refer to our <Link to="/help-centre" className='text-primary'>Help Centre</Link> for some examples;</li>
<li>it is not missing any <span className='font-semibold text-[#000]'>accessories or parts</span>;</li>
<li>you log a return on the Website <span className='font-semibold'>within 30 days</span> of delivery to you or collection by you of the unwanted product. After 30 days, you can only return a product if it is defective; and</li>
<li>it is not one of the products listed below.</li>
    </ul>
</div>

<div className='space-y-3 text-xs my-2'>
<p className='text-[#000] font-semibold text-base'>Changed your mind?</p>
<p className='my-2'>Where you have changed your mind and would like a credit for a product, you can return it – <span className='font-semibold'>provided the product is not:</span></p>
<ul className='my-2 pl-8 list-disc space-y-2'>
    <li>a digital product such as an electronic voucher, gaming code or other digital download;</li>
    <li>an audio or video recording or computer software that has been unsealed;</li>
    <li>a newspaper, periodical or magazine;</li>
    <li>a foodstuff, beverage or other product intended for everyday consumption;</li>
    <li>a nursing or maternity product, an infant bottle, infant feeding product or bottle accessory that has been unsealed, including (but not limited to) breast pumps, bottles, teats, soothers/pacifiers, formula, maternity underwear, nappies and wipes;</li>
    <li>a beauty product or fragrance which has been used;</li>
    <li>an intimate product, lingerie, swimwear, bodysuit, underwear or jewellery for piercings, which for hygienic and public health reasons may not be returned; or</li>
    <li>a product which has been personalised for you or made to your specifications; or</li>
    <li>a flatpack furniture product that has been assembled after delivery.</li>
</ul>
<p>We will collect the product from you at no charge. Once we have inspected the product and validated your return, we will credit your account with the purchase price of the product within 10 days of the return (or refund you if that is your preference).</p>
</div>

<div className='space-y-3 text-xs my-3'>
<p className='text-[#000] font-semibold text-base pb-2'>Want to exchange?</p>
<p>Fashion and sportswear products can be exchanged for a different size or colour variation, provided that such variation is available. An Unboxed Deal, reconditioned product or used product can only be exchanged for a variation of the same Unboxed Deal, reconditioned product or used product, if such variation is available. In such a case, we will collect the product from you and deliver the requested product to you at no charge. If such variation is not available, we will credit your account with the purchase price of the product within 10 days of the return (or refund you if that is your preference).</p>
<p>We are entitled to inspect the product to validate your return. Please refer to our Help Centre for some advice on making sure that your product is returnable under this section.</p>
</div>

<div className='space-y-3 text-xs my-3'>
<p className='text-[#000] font-semibold text-base pb-2'>Not what you ordered?</p>
<p>If we accidentally deliver the wrong product to you, or if the product is not as described on the Website, please notify us and we will collect the product from you at no charge. If the product is missing any accessories or parts, you will need to follow the process set out in section 2 below. Once we have inspected the product and validated your return, we will at your choice deliver the correct product to you as soon as possible (if the correct product is available); or credit your account with the purchase price of the product within 10 days of the return (or refund you if that is your preference).</p>
</div>

<div className='space-y-3 text-xs my-3'>
 <p className='text-[#4d4d4f] text-lg font-bold'>2: Products damaged on delivery</p>
    <p>Should a product be damaged or missing any parts or accessories at the time of delivery / collection, <span className='font-semibold'>please notify us within 7 days</span> of such delivery / collection by logging a return on the Website.</p>
    <p>We will arrange to collect the product from you at no charge. Once we have inspected the product and validated your return, we will at your choice repair / replace the product as soon as possible (if such repair is possible/ we have the same product in stock to use as a replacement) or credit your account with the purchase price of the product (or refund you if that is your preference).</p>

</div>


<div className='space-y-3 text-xs my-3'>
 <p className='text-[#4d4d4f] text-lg font-bold'>3: Defective products</p>
    <p>We do our best to ensure that the products we deliver to you are of a high quality,  and in good working order and without defects.</p>
    <p>What is a defect? A defect is a material imperfection in the manufacture of a product or any characteristic of a product, which makes the product less acceptable than one would reasonably be entitled to expect in the circumstances. Please refer to our Help Centre for some examples.</p>
    <p>The following will <span className='font-medium'>NOT</span> be regarded as defects and will not entitle you to a return under this section 3:</p>

    <ul className='my-2 pl-8 list-disc space-y-2'>
<li>faults resulting from normal wear and tear;</li>
<li>damage arising from negligence, user abuse or incorrect usage of the product;</li>
<li>damage arising from electrical surges or sea air corrosion;</li>
<li>damage arising from a failure to adequately care for the product;</li>
<li>damage arising from unauthorized alterations to the product;</li>
<li>where the specifications of a product, although accurately described on the Website and generally fit for its intended purpose, do not suit you; and</li>
<li>in relation to Unboxed Deals or used products, signs of handling and/or repackaging.</li>
    </ul>
</div>


<div className='space-y-3 text-xs my-3'>
<p className='text-[#000] font-semibold text-base pb-2'>Standard Warranty</p>
<p>If you have received a product which turns out to be defective or otherwise of poor quality (save for manufacturer warranty products which are discussed below), please notify us as soon as reasonably possible after you become aware of the defect or poor quality, but in any event within 6 months after delivery / collection of the product (except in the case of an extended supplier warranty, which is set out below).</p>
<p>You can do so by logging a return on the Website, and we will arrange to collect the product from you at no charge. Once we have inspected the product and validated your return, we will at your choice repair / replace the product (if such repair is possible / we have the same product in stock to use as a replacement) or credit your account with the purchase price of the product (or refund you if that is your preference). If the repair / replacement takes longer than 21 days, we will get in touch with you to see if you would rather receive a credit / refund.</p>
<p>Where there is no extended supplier warranty period, unfortunately we cannot facilitate returns that fall outside of the 6 month period.</p>
<p>Where you request a repair / replacement of an Unboxed Deal, reconditioned product or used product and a repair is not possible, we will see if we have a replacement Unboxed Deal, reconditioned product or used product in stock (which is the same product, of the same nature and type, as the one sold), but if we do not, we will credit / refund you. A product in perfect condition (that is not an Unboxed Deal, reconditioned product or used product) is not the same product as an Unboxed Deal, reconditioned product or used product. This is why Unboxed Deals, reconditioned products and used products are discounted, compared to products in perfect condition.</p>
</div>


<div className='space-y-3 text-xs my-3'>
<p className='text-[#000] font-semibold text-base pb-2'>Extended Supplier Warranty (stipulated on product page)</p>
<p>A product may have a supplier warranty that extends beyond the 6 month Standard Warranty. If such a product turns out to be defective more than 6 months after delivery / collection (save for manufacturer warranty products which are discussed below), please notify us as soon as reasonably possible after you become aware of the defect, but in any event within the extended supplier warranty period after delivery / collection of the product.</p>

<p>You can do so by logging a return on the Website, and we will facilitate your return of the product to the supplier at no charge. Unfortunately we cannot facilitate returns that fall outside of the extended supplier warranty period.</p>

<p>Please note that any extended supplier warranty is subject to whatever terms and conditions the supplier or manufacturer may impose. These are usually stated in a brochure or leaflet inside or on the product packaging. It is your responsibility to make yourself aware of any such terms and conditions.</p>

<p>It is also important to note that the remedy offered to you is at the supplier or manufacturer’s discretion what remedy it can offer you. Takealot is under no obligation to provide you with a credit, repair / replacement, as your remedy lies with the supplier or manufacturer. However, since we want your experience to be as good as possible, if the supplier or manufacturer has offered you a repair / replacement within the applicable extended supplier warranty and it takes longer than 21 days, we will get in touch with you to see if you would rather receive a credit / refund directly from us.</p>

<p>PLEASE NOTE: Unboxed Deals, certain reconditioned products and used products do not have extended supplier warranties and this will be made clear on the product description page.</p>
</div>

<div className='space-y-3 text-xs my-3'>
<p className='text-[#000] font-semibold text-base pb-2'>Manufacturer Warranty (stipulated on product page)</p>
<p>A manufacturer  warranty product is a product for which the relevant supplier or manufacturer chooses to manage defective returns themselves, directly with the customer, and not through   Takealot. Some examples include Dell, Nespresso, Xbox and PlayStation products.</p>

<p>If a manufacturer warranty product turns out to be defective or otherwise of poor quality, please contact the relevant supplier or manufacturer directly via the contact details provided when attempting to log the return on the Takealot Returns page.</p>

</div>

<div className='space-y-3 text-xs my-3'>
 <p className='text-[#4d4d4f] text-lg font-bold'>4: Gift Vouchers & Coupons</p>
    <p>There are two types of Coupons: a Coupon with a fixed amount of a discount, e.g. R100 off (“<span className='font-medium'>Fixed Coupon</span>”), and a Coupon with a percentage discount, e.g. 10% off (“<span className='font-medium'>Percentage Coupon</span>”).</p>
    <p>Where you have used a Fixed Coupon to pay for an order, and you or Takealot later cancels your order (or part thereof) prior to delivery of the relevant product(s), or you log a return of one or more products for a credit in accordance with the Returns Policy, the value of the Fixed Coupon will be deducted off the purchase price of the cancelled or returned product(s) (as applicable), and we will credit your account for the balance, if any (or refund you if that is your preference). We will also provide you with a replacement Fixed Coupon of the same value as the original Fixed Coupon used. Takealot may in its sole discretion impose restrictions on the use of the replacement Fixed Coupon.  For any subsequent cancellations or returns arising out of the same order, we will credit your account as normal with the value of the returned product (or refund you if that is your preference).</p>

    <p>Wherever you have used a Gift Voucher to purchase a product that you later return for a refund in accordance with the Policy, we cannot refund you in cash for that portion of the purchase price which you paid using the Gift Voucher, but we will credit your account.</p>
</div>


<div className='space-y-3 text-xs my-3'>
 <p className='text-[#4d4d4f] text-lg font-bold'>5: Online Course Code Returns</p>
    <p className='text-[#000] text-sm font-semibold'>Online Course Codes are treated differently to other products when it comes to returns, given their digital nature and the fact that technical knowledge of the Online Course registration process may be required to assist you if the Online Course Code does not work. <span className='font-bold text-base'>Once you purchase an Online Course Code, we will only allow you to return it if defective.</span></p>
    <p>Any defect in an Online Course Code Link shall be dealt with as follows:</p>

    <ul className='my-2 pl-8 list-disc space-y-2'>
<li>Should you experience any problems in utilising the Online Course Code, in accessing or opening the Course Code, or if  the Online Course Code is defective in some other way (missing pages, incorrect book, code does not work etc), please report the problem to us as soon as reasonably possible after you become aware of the problem, but in any event <span className='font-semibold'>within 6 months</span> of purchase. This will create a support request for you.</li>

<li>We will then investigate the possible cause/s of the problem and how to rectify them. We may need to liaise with the relevant service providers to assess and rectify the problem or to issue you with a new Link or Online Course Code so that you can get a replacement Online Course Code, as the case may be.</li>

<li>If the Online Course Code is defective, we will at your choice replace it (if such replacement is possible) or credit your account with the purchase price of the Online Course Code (or refund you if that is your preference).</li>
    </ul>
</div>

<div className='space-y-3 text-xs my-3'>
 <p className='text-[#4d4d4f] text-lg font-bold'>6: Bundles</p>
    <p className='text-[#000] text-sm font-semibold'>There are two types of bundles: a bundle consisting of products that either we or you (as provided on our website) have combined together in a single bundle (“<span className='font-semibold'>Bundle Deal</span>“); or a bundle compiled by our supplier and supplied to us as a single unit (“<span className='font-semibold'>Pre-packed Bundle</span>“). All returns relating to bundles are subject to the terms of this Policy as read with the following provisions:</p>


    <ul className='my-2 pl-8 list-disc space-y-2'>
<li><span className='font-medium'>Bundle Deal</span> – You may return a Bundle Deal as a whole or any of its component products individually to us. If you qualify for a credit in respect of any component product, we will credit your account with the actual purchase price (after applying any applicable saving or discount) you paid for such a product as displayed in your order history.</li>

<li><span className='font-medium'>Pre-packed Bundle</span> – Unless otherwise indicated by us, your return of a Pre-packed Bundle will only be accepted if you return all of its component products to us. Failure to do so may result in us declining the return of a Pre-packed Bundle.</li>

    </ul>
</div>


<div className='space-y-3 text-xs my-3'>
 <p className='text-[#4d4d4f] text-lg font-bold'>7: Charges and refunds</p>
    <p className='text-[#000] text-sm font-semibold'>If you return a defective product to us, but you fail to return all of the accessories and parts that were sold with that product, we are entitled to (subject to applicable law)  refuse the return,  or only to replace the item that you did return; or to estimate the value of the missing accessories and parts and to credit or refund you in respect of the returned item only.</p>


 <p>If you return a product that does not comply with this Policy, you may be liable to reimburse Takealot for the cost of collecting the product from you and the cost of having the product returned to you.</p>
 <p>Under no circumstances will donations you make on our Website, or any goodwill credit you may receive from us, be refunded.</p>
 <p><span className='font-medium'>Please note that we only refund to the payment method that you originally used</span> – i.e. payment by credit card will be refunded to the same credit card, payment by Instant EFT or COD (cash on delivery) will be refunded to your nominated bank account, and payment by Discovery Miles or eBucks will be refunded to your Discovery Miles or eBucks account.</p>
 <p>If you used the Nedbank Personal Loan payment method, your refund will be processed as follows:</p>
 <p>If, at any time, items are returned (and such return is approved by Takealot) in accordance with the this Returns policy or cancelled before delivery in accordance with customer terms and conditions, the value of the validated refund or cancelled item (as the case may be) will be credited to your loan account or repaid to you by Nedbank.</p>
 <p>However, if you, within 45 days of that order being placed,  process a return of your entire order (and such return is approved by Takealot) in accordance with the Return Policy or you cancel your entire order before delivery, and there is no delivery charge on the order, then Nedbank will refund you with any fees and interest due on the loan and cancel the loan accordingly.
</p>
</div>
</section>
    );
};

export default ReturnPolicy;