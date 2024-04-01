import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const MasterPass = () => {
    return (

        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>
                <p className='py-4'>
                    Masterpass by MasterCard® is a free digital wallet service that makes online shopping safe and easy by storing all of your payment information in one convenient and secure place.
                </p>

                <h1 className='font-bold py-4'>
                    New Masterpass Users
                </h1>
                <p className='py-4'> In order to pay using Masterpass you must have the Masterpass App on your smartphone. The Masterpass App can be found at:</p>

                <ul className='list-inside list-disc py-4'>
                    <li className='py-3'> Google Play </li>
                    <li className='py-3'> Apple App Store </li>
                    <li className='py-3'> Blackberry Store </li>
                    <li className='py-3'> Windows Store </li>
                </ul>

                <p className='py-4'> Check if your bank's app supports QR payments or download any Scan to Pay Masterpass App. You don't need to have an account with the bank or company whose App you're downloading. </p>

                <p className='py-4'> If you're not using your bank's app, securely save your Mastercard or Visa card in the app the first time you use it. </p>

                <p className='py-4'> Scan the QR code or tap the button of the Scan to Pay App </p>

                <p className='py-4'> Authorise the payment. Depending on the Scan to Pay App and card you're using, you will need to either complete your bank's app authentication, enter your ATM Card PIN or a One Time PIN (OTP). </p>

                <h1 className='font-bold py-4'> Existing Masterpass Users: </h1>

                <p className='py-4'> When you’re ready to check out, simply choose to pay using Masterpass. You will be redirected to the Masterpass payment page.
                </p>

                <p className='py-4'> MasterPass will present a code on screen. Use the Masterpass App on your smartphone to scan the code and authorise your payment.
                </p>

                <p className='py-4'> Once payment has been authorised you will be returned to takelot.com to receive your order confirmation.
                </p>

                <h1 className='font-bold py-4'> Masterpass help </h1>

                <p className='py-4'> For Masterpass account help visit the Masterpass Support FAQs at http://www.mastercard.com/za/masterpass/help.html#
                </p>

            </div>

            {/* contact part */}
            <SubContact></SubContact>

        </section>
    );
};

export default MasterPass;