import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const eBucks = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>
                <p className='py-4'>
                    eBucks is a rewards system offered to FNB & RMB clients and can be used as one of our simple and easy to use payment options.
                </p>
                <p className='py-4'>
                    All you have to do is choose eBucks as your preferred payment method during checkout and follow the prompts.
                </p>
                <p className='py-4'>
                    To pay you will need to your eBucks SA ID number and a four digit PIN.
                </p>
                <p className='py-4'>
                    Login to the eBucks website or your banking app and request a PIN.
                </p>
                <p className='py-4'>
                    Capture your PIN in checkout and pay.
                </p>

                <h1 className='font-bold py-4'>Part-pay using eBucks and Rands </h1>

                <p className='py-4'>
                    Once you have loaded up your cart on the website and chosen eBucks as your payment option at checkout, you are then able to pay either totally with eBucks (if you’ve got enough of course) OR part-pay with Credit/Debit card/Instant EFT and eBucks.
                </p>

                <h1 className='text-2xl font-bold py-4'>Earn Ebucks </h1>

                <p className='py-4'>
                    You can shop your heart out while earning eBucks every step of the way!
                </p>

                <p className='py-4'>
                    When checking out and paying for your items, you can select whether you’d like to earn eBucks on that particular purchase.
                </p>
                <p className='py-4'>
                    Simply enter your South African ID number or passport number in the allocated field and click ‘earn’.
                </p>


                <p className='py-4'>
                    <b>Important to note:</b> If you choose to earn eBucks on an order, you have to pay using the Credit & Debit Card payment option.
                </p>

                <p className='py-4'>
                    If you choose to pay (or part-pay) for an order using eBucks, you cannot earn eBucks on the same order.
                </p>


                <p className='py-4'>
                    Your eBucks will be awarded at the beginning of the month for purchases made the previous month.
                </p>


                <p className='py-4'>
                    If using a promotional coupon, gift voucher or account credits, you will only earn eBucks on the remaining balance that is actually paid with money, and not on the coupon, gift voucher or credit amount itself.
                </p>


                <p className='py-4'>
                    You need to make sure you are registered for eBucks in order to earn. If you haven’t registered yet, please visit www.eBucks.com.
                </p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>
        </section>
    );
};

export default eBucks;