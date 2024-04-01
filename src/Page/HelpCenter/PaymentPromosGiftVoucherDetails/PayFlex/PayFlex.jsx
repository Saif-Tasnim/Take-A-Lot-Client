import React from 'react';
import { Link } from 'react-router-dom';
import SubContact from '../../../../components/SubContact/SubContact';

const PayFlex = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>

                <p className='py-4'>Payflex is an interest-free payment plan available at checkout. All you need is your ID number to confirm eligibility. If you qualify, Payflex will charge your debit or credit card 25% of the purchase price immediately and the balance over 6 weeks until paid in full – with 0% interest.
                </p>

                <p className='py-4'> You can use any Visa, Mastercard or American Express card. </p>

                <p className='py-4'> How it works </p>

                <ul className='list-disc py-4'>
                    <li className='py-4'>
                        Select “Payflex” at checkout. Payflex is only available on orders up to R15,000
                    </li>

                    <li className='py-4'>
                        Enter your personal details – name, email, cellphone number, SA ID number
                    </li>

                    <li className='py-4'>
                        Confirm your cellphone number – Payflex will send you a one-time PIN via SMS
                    </li>

                    <li className='py-4'>
                        Payflex will complete an eligibility and credit check
                    </li>

                    <li className='py-4'>
                        Make your first payment with any VISA, Mastercard or American Express card
                    </li>

                    <li className='py-4'>
                        Set your Payflex password
                    </li>

                    <li className='py-4'>
                        Once your first payment has been made, we will begin processing your order. You will receive an email confirming your estimated delivery or collection date
                    </li>
                </ul>

                <p>Note: If you are not approved for a Payflex account, you will be redirected back to Checkout where you can choose a different payment method to complete your order. Certain products are not eligible for Payflex payment. Payflex will appear as an available payment method on the product page if the product is eligible. </p>

                <p>If you have any questions about Payflex, you can visit <Link to="https://payflex.co.za/shopper-faqs/" className='text-primary hover:underline'> https://payflex.co.za/shopper-faqs/ </Link> or contact them via email at support@payflex.co.za or call 010 444 0004. </p>

                <p className='py-4'>Payflex business hours are Monday – Friday between 08h00 and 17h00.</p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>
            
        </section>
    );
};

export default PayFlex;