import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const EFTWithOzow = () => {
    return (
        <section className='w-[82%]'>
            <div className='p-8 bg-white text-sm'>
                <p className='py-4'>
                    Takealot has two Instant EFT payment methods via payment partners, Ozow and PayFast.
                </p>
                <p className='py-4'>
                    Instant EFT is a payment service that allows you to pay via EFT without the hassle of a waiting period or additional fees.
                </p>

                <h1 className='font-bold py-4'>Ozow</h1>

                <p className='py-4'>
                    Ozow is a fast, simple and secure way for customers to pay directly from their bank account via instant EFT. Instant/Automated EFT is a type of payment service that allows you to pay via EFT, without the inconvenience of a waiting period, and in some cases additional fees.
                </p>

                <p className='py-4'>
                    EFT with Ozow enables you to make EFT Payments that clear immediately. Ozow supports South Africa’s nine major banks, namely ABSA, FNB, Nedbank, Standard Bank, Capitec, Investec, Tymebank, African Bank, Bidvest Bank.
                </p>

                <h1 className='font-bold py-4'>How it works:</h1>

                <ul className='list-disc py-4'>
                    <li className='py-4'>
                        Select Ozow as your payment method during checkout.
                    </li>
                    <li className='py-4'>
                        Select your bank from the list presented.
                    </li>
                    <li className='py-4'>
                        Log in to your online banking using your online banking credentials.
                    </li>
                    <li className='py-4'>
                        Select an account to pay from.
                    </li>
                    <li className='py-4'>
                        Your bank will send you a form of payment authentication either by means of SMS, USSD Push message or In-App authorization.
                    </li>
                    <li className='py-4'>
                        Once you have successfully authorized your payment, the transaction is marked as complete.
                    </li>
                    <li className='py-4'>
                        Ozow then sends an instant notification to TicketPro on the outcome of the transaction and in turn, will processes your order immediately.
                    </li>


                </ul>

                <h1 className='font-bold py-4'>Benefits:</h1>

                <ul className='list-disc py-4'>
                    <li className='py-4'>
                        Your order status will be updated immediately
                    </li>
                    <li className='py-4'>
                        There is no need to send through a proof of payment
                    </li>
                    <li className='py-4'>
                        There is no need to wait for funds to reflect in our account
                    </li>
                    <li className='py-4'>
                        There is no need to enter Takealot’s banking details or order reference number
                    </li>

                </ul>

                <h1 className='font-bold py-4'>Is it safe?</h1>

                <ul className='list-disc py-4'>
                    <li className='py-4'>
                        Ozow guarantees the highest levels of security when paying online
                    </li>
                    <li className='py-4'>
                        Ozow has a Thawte EV SSL encryption certificate which gives our payment processing service an extremely high level of security
                    </li>
                    <li className='py-4'>
                        Ozow acts as a proxy between the buyer and the bank to facilitate a faster, safer and easier payment process for both the buyer and the seller
                    </li>
                    <li className='py-4'>
                        Your online banking login details are NOT stored by Ozow
                    </li>
                </ul>

            </div>

            {/* contact part */}
            <SubContact></SubContact>

        </section>
    );
};

export default EFTWithOzow;