import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const AboutPersonalInfo = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>
                <p className='py-4'>The purpose of our Privacy Policy is to set out how, why and when personal information is processed and used:

                </p>

                <ul className='list-inside list-disc py-4'>
                    <li className='py-3'> The personal information we collect.
                    </li>

                    <li className='py-3'> Purpose of the personal information we process.
                    </li>

                    <li className='py-3'> Sharing of personal information with third parties.
                    </li>

                    <li className='py-3'> Processing of personal information not received from you directly.
                    </li>
                </ul>

                <p className='py-3'> It is important that you read the Privacy Policy together with our other Terms and Conditions, privacy notices or policies we may provide from time to time when we collect or use your personal information.

                </p>

                <h3 className='font-bold text-base'>Processing personal information not received by you directly
                </h3>
                <p className='py-3'> Takealot may process personal information it receives from contractual agreements we may have with data management service providers for responsible marketing purposes or other legitimate purposes.

                </p>


                <h3 className='font-bold text-base'>Storing personal information
                    you directly
                </h3>

                <p className='py-3'> These contractual agreements contain the necessary confidentiality and personal information security clauses to protect our customers including warranties that any information collected/processed on behalf of Takealot is done so lawfully.
                </p>

                <p className='py-3'> Your personal information is stored in accordance with POPIA requirements relating to international data transfers.
                </p>

                <p className='py-3'> We will retain your personal information for as long as you remain our customer and in line with our legislative obligations and internal retention policy.

                </p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>

        </section >
    );
};

export default AboutPersonalInfo;