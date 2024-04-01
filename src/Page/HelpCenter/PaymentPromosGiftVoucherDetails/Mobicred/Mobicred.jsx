import React from 'react';

const Mobicred = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>
                <p className='py-4'>
                    Mobicred is a simple and convenient online credit facility that allows you to shop on takealot.com and repay your order in monthly instalments. Interest is charged at 21% per year. <b>Please note the annual interest rate may change.</b>
                </p>

                <p className='py-4'>
                    As a revolving credit facility, Mobicred repayments are calculated as 10% of the account balance plus fees. These fees will be confirmed with you by Mobicred on opening your Mobicred account and could entail the following:
                </p>

                <ul className='list-disc py-4'>
                    <li className='py-2'>Monthly service fee of R42.00 (incl. VAT) </li>
                    <li className='py-2'>Once off account initiation fee ranging from R119-R610 (incl. VAT), depending on the facility granted. </li>
                </ul>

                <p> <b>Please note:</b> The monthly payment amount displayed is indicative only and based on 12 monthly instalments excluding any Mobicred fees.
                </p>

                <p>To Pay using Mobicred, choose Mobicred from your Payment options, then follow the prompts below. </p>

                <p>New Mobicred users: </p>

                <ul className='list-decimal py-4 list-inside'>
                    <li className='py-4'>
                        First, you’ll need to register on Mobicred’s website and complete your application.
                    </li>
                    <li className='py-4'>
                        Once approved, you can come back and pay for your items using Mobicred*.
                    </li>

                    <li className='py-4'>
                        Your application may take 1 business days to process
                    </li>

                    <li className='py-4'>
                        If you need your items right now, please select a different payment method. We can’t guarantee that your items will still be in stock when you return.
                    </li>
                </ul>

                <p className='py-4'>Existing Mobicred users:</p>

                <ul className='list-inside list-decimal py-4'>
                    <li className='py-2'>
                        Select Mobicred as your payment option during checkout.
                    </li>

                    <li className='py-2'>
                        Log in using your Mobicred username and password.
                    </li>

                    <li className='py-2'>
                        Enter the one-time pin (OTP) that will be sent to your mobile phone
                    </li>
                    <li className='py-2'>
                        Click on “Confirm & Pay”. </li>
                    <li className='py-2'>
                        Your Mobicred account will be debited and we will send you a confirmation email of your order.
                    </li>
                </ul>

                <p className='py-4'> <b>*Subject to credit approval.</b> T&Cs apply.</p>

                <p className='py-4'>If you have any questions about Mobicred you can visit www.mobicred.co.za or you can contact them via email at customerservice@mobicred.co.za.
                </p>
            </div>
        </section>
    );
};

export default Mobicred;