import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const AccessFamilyMember = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>
                <p className='py-3'>
                    We grant access to a deceased family member’s account and will require the following documentation as requested below:
                </p>

                <ul className='list-inside list-disc py-3'>
                    <li className='py-2'>
                        Letters of executorship or a letter of authority
                    </li>

                    <li className='py-2'>
                        The deceased’s profile information
                    </li>

                    <li className='py-2'>
                        Their death certificate
                    </li>

                    <li className='py-2'>
                        A copy of your identity document or smartcard ID
                    </li>

                    <li className='py-2'>
                        A copy of the deceased’s identity document or smartcard ID
                    </li>

                </ul>



                <p className='py-3'>
                    Please note that by providing us with this information you also consent to your personal information to be processed in line with our Privacy Policy and POPIA.
                </p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>

        </section>
    );
};

export default AccessFamilyMember;