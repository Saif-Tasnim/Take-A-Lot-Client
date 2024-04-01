import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const VerifyEmail = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>
                <p className='py-4'>
                    For additional security, we recommend shoppers verify their account’s email address.
                </p>

                <p className='py-4'>
                    This can be done by sending an email containing a one-time-PIN (OTP) to your email address:
                </p>

                <ul className='list-decimal py-3'>
                    <li className='py-2'>
                        Go to My Account - Personal Details
                    </li>

                    <li className='py-2'>
                        Next to ‘Email Address’, click the ‘Edit & Verify’ button
                    </li>

                    <li className='py-2'>
                        Enter your Takealot password and click the 'Send OTP' button
                    </li>

                    <li className='py-2'>
                        Check your email inbox for an email containing the OTP (If you can’t find the email in your inbox, check your spam or promotions folder)
                    </li>

                    <li className='py-2'>
                        Enter the OTP provided in the email
                    </li>

                    <li className='py-2'>
                        Click ‘Verify’
                    </li>


                </ul>


                <p className='py-4'>
                    Note: If you have not received the OTP, please wait up to 2 minutes then click ‘Resend OTP’. Only the most recent OTP will be valid for step 5.
                </p>


                <p className='py-4'>
                    If you did not receive the OTP (remember to check your spam or promotions folder) or are unable to verify your email address, select the Contact Us button below.
                </p>


            </div>

            {/* contact part */}
            <SubContact></SubContact>
        </section>
    );
};

export default VerifyEmail;