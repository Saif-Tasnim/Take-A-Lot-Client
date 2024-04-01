import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const VerifyIdentity = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>
                <p className='py-3'>
                    To comply with our obligations under POPIA we verify your identity to ensure the personal information relating to your Takealot account is shared with you or an authorised person.
                </p>

                <p className='py-3'>
                    When you contact us either by phone, email or social media platforms, security questions will be asked to confirm and verify your identity before any information is provided and we encourage you to have the personal details pertaining to your account available for us to assist you promptly.
                </p>

            </div>

            {/* contact part */}
            <SubContact></SubContact>

        </section>
    );
};

export default VerifyIdentity;