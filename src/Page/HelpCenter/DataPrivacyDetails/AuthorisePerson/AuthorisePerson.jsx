import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const AuthorisePerson = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>

                <p className='py-4'>
                    Yes. You can authorise a person such as your friend, spouse, or family member to have access to your Takealot account or raise a query on your behalf concerning your Takealot account.
                </p>

                <p className='py-4'>
                    You will be required to complete a third-party authorisation form.
                </p>

                <p className='py-4'>
                    As the account holder, please contact us below and the required form will be sent to your profile email address.


                </p>

                <p className='py-4'>
                    <b>Important to note:</b> The third party must be able to verify and confirm their identity and the identity of the primary account holder.


                </p>

                <p className='py-4'>
                    When you appoint an authorised third party, that third-party consents to their personal information being processed by Takealot in line with our Privacy Policy.

                </p>


                <p className='py-4'>
                    You are responsible to whom any personal information is disclosed, including any authorised or unauthorised third party.
                </p>



                <p className='py-4'>
                    Please note that Takealot will not be liable for any loss or damage arising or suffered by you as a result of the disclosure of your Personal Information to any authorised or unauthorised third party. We do not regulate or control how that third party uses your Personal Information.
                </p>

            </div>

            {/* contact part */}
            <SubContact></SubContact>

        </section>
    );
};

export default AuthorisePerson;