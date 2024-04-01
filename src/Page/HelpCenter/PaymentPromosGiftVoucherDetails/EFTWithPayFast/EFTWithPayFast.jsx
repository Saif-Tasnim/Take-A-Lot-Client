import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const EFTWithPayFast = () => {
    return (
        <section className='w-[82%]'>
            <div className='p-8 bg-white text-sm'>
                <p className='py-4'>
                    PayFast is an Instant EFT payment method available to all customers who bank with Capitec, African Bank, Bidvest, ABSA, First National Bank, Investec, Nedbank, Tyme Bank or Standard Bank.
                </p>

                <h1 className='font-bold py-4'>Automatic EFT </h1>

                <ul className='list-disc py-4'>
                    <li className='py-4'>
                        Select Instant EFT as your payment method during the checkout process and click on the PayFast option, selecting Instant EFT.
                    </li>
                    <li className='py-4'>
                        Select your preferred bank.
                    </li>
                    <li className='py-4'>
                        Login using your internet banking credentials.
                    </li>
                    <li className='py-4'>
                        Select an account to pay from and enter a reference for your records.
                    </li>
                    <li className='py-4'>
                        The automated process will navigate and populate the relevant fields on your behalf in the background.
                    </li>
                    <li className='py-4'>
                        Your bank will send you an OTP (one-time-pin) or mobile authentication to your mobile phone to verify the payment.
                    </li>
                    <li className='py-4'>
                        Enter your OTP or accept the authentication message when prompted.
                    </li>
                    <li className='py-4'>
                        Payment will then be completed.
                    </li>


                </ul>

                <h1 className='font-bold py-4'>Benefits to using Automatic EFT:</h1>

                <ul className='list-disc py-4'>
                    <li className='py-4'>
                        Your order status will be updated immediately.
                    </li>
                    <li className='py-4'>
                        There is no need to send proof of payment.
                    </li>
                    <li className='py-4'>
                        There is no need to wait for funds to reflect in our account.
                    </li>
                    <li className='py-4'>
                        There is no need to enter takealot.com’s banking details or an order reference number.
                    </li>

                </ul>

                <h1 className='font-bold py-4'>Is it safe?</h1>

                <ul className='list-disc py-4'>
                    <li className='py-4'>
                        PayFast guarantees the highest levels of security when paying online
                    </li>
                    <li className='py-4'>
                        PayFast has a Thawte EV SSL encryption certificate which gives our payment processing service an extremely high level of security.
                    </li>
                    <li className='py-4'>
                        PayFast acts as a proxy between the buyer and the bank to facilitate a faster, safer and easier payment process for both the buyer and the seller.
                    </li>
                    <li className='py-4'>
                        Your online banking login details are NOT stored by PayFast.
                    </li>
                </ul>

            </div>

            {/* contact part */}
            <SubContact></SubContact>

        </section>
    );
};

export default EFTWithPayFast;