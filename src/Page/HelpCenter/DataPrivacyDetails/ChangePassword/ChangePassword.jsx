import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const ChangePassword = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>
                <p className='p-4'>
                    To change your password, go to My Account and click on Personal Details, then click the password Reset button and complete the fields.</p>

                <p className='p-4'>
                    If you forgot your password, you can click on Forgot Password? on the Login page.
                </p>

                <p className='p-4'>
                    Enter your account email address and we’ll send instructions to that email address on how to create a new password.

                </p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>
        </section>
    );
};

export default ChangePassword;