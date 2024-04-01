import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const POPIACompilence = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>
                <p className='py-4'>“POPIA” refers to the Protection of Personal Information Act, 2013. The purpose of this act is to promote the protection of your personal information and to introduce certain conditions to establish minimum standards for how your personal information is handled by organisations.
                </p>

                <p className='py-4'>“Personal information” is any information that can be used to identify you. This includes your name and surname, mobile telephone number, home address and email address.
                </p>

                <h3 className='text-base font-bold'>takealot.com compliance in accordance with POPIA
                </h3>

                <p className='py-4'>takealot.com is fully compliant with its obligations as set out in POPIA. Should you have any concerns about how we process your personal information please refer to our Privacy Policy.
                </p>

                <h3 className='text-base font-bold'>The role of the Information Regulator and how to log a complaint
                </h3>

                <p className='py-4'>The Information Regulator is the authority responsible for overseeing the enforcement and implementation of POPIA. Whilst we encourage you to give us an opportunity to resolve your privacy concerns, if you have a complaint regarding how your personal information is processed you can also raise your complaint directly with the Information Regulator. For further information on this, you can visit the complaints page on the Information Regulator’s website.
                </p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>
        </section>
    );
};

export default POPIACompilence;