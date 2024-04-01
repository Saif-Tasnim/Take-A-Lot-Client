import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const UpdateProfile = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>
                <ul className='list-disc py-4'>
                    <li className='py-3'>Log in with the email address and password that your account was registered with.
                    </li>

                    <li className='py-3'>Go to My Account then select Personal Details.
                    </li>

                    <li className='py-3'>Change your old email address to your new one.
                    </li>

                    <li className='py-3'>Verify your new email address.
                    </li>
                </ul>

                <p className='py-2'>If you have trouble changing your email address and require additional assistance, Contact Us below.
                </p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>
        </section>
    );
};

export default UpdateProfile;