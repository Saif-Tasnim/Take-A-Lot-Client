import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const VerifyPhone = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>
                <p className='py-4'>
                    Verify your account’s mobile number by sending an SMS containing a one-time-PIN (OTP) to your mobile device:
                </p>

                <ul className='list-decimal py-3'>
                    <li className='py-2'>
                        Go to My Account - Personal Details
                    </li>

                    <li className='py-2'>
                        Next to ‘Mobile Number’, click the ‘Add & Verify’ or ‘Edit & Verify’ button

                    </li>

                    <li className='py-2'>
                        Select your country code

                    </li>

                    <li className='py-2'>
                        CEnter your mobile number

                    </li>

                    <li className='py-2'>
                        Click ‘Send OTP’

                    </li>

                    <li className='py-2'>
                        Check your mobile phone for an SMS containing the OTP (The SMS will be sent to the number you provided in step 4)

                    </li>

                    <li className='py-2'>
                        Enter the OTP provided in the SMS
                    </li>

                    <li className='py-2'>
                        Click ‘Verify’
                    </li>
                </ul>


                <p className='py-4'>
                    If you have not received the OTP, please wait up to 2 minutes then click ‘Resend OTP’. Only the most recent SMS OTP will be valid for step 7.

                </p>

                <p className='py-4'>
                    If you did not receive the OTP or are unable to verify your mobile number, select the Contact Us button below.

                </p>

            </div>

            {/* contact part */}
            <SubContact></SubContact>
        </section>
    );
};

export default VerifyPhone;