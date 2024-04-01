import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const CardPayment = () => {
    return (
        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>
                <p className='py-4'>Pay for your order using Visa, Mastercard, Investec or Diners credit, cheque or debit card. </p>

                <p className='py-4'>
                    Select Credit / Debit card as your payment method during checkout.
                </p>

                <h1 className='font-bold py-4'>First Time Customers </h1>

                <ul className='list-disc py-4'>
                    <li className='py-4'>Complete your card details to save your card and checkout for future orders.
                    </li>
                    <li className='py-4'>Select Straight or Budget

                    </li>
                    <li className='py-4'>Complete the details and hit the pay button

                    </li>
                    <li className='py-4'>You may be directed to your bank’s 3D Secure process to authenticate your order and provided with an OTP or USSD process to complete your payment.

                    </li>
                </ul>


                <h1 className='font-bold py-4'>Existing Customers </h1>

                <ul className='list-disc py-4'>
                    <li className='py-4'>Select Pay with Credit card

                    </li>
                    <li className='py-4'>Select Straight or Budget

                    </li>
                    <li className='py-4'>Complete the details and hit the pay button

                    </li>
                    <li className='py-4'>You may be directed to your bank’s 3D Secure process to authenticate your order and provided with an OTP or USSD process to complete your payment.

                    </li>

                </ul>

                <h1 className='font-bold py-4'>Adding or Deleting Card Details </h1>

                <p className='py-4'>
                    At checkout when selecting Pay with Credit card you will be directed to your Saved Cards page.

                </p>

                <p className='py-4'>
                    Select the card you wish to Delete or select Add New Card.
                </p>

            </div>

            {/* contact part */}
            <SubContact></SubContact>

        </section>
    );
};

export default CardPayment;