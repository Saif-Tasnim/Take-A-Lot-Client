import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const DifferencePOPWithPAI = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>

                <p className='py-4'>POPIA gives you the right to request access to any personal information we may have in our records. Takealot has introduced a POPIA information request and deletion process to assist you in exercising your rights under POPIA.
                </p>

                <p className='py-4'>“PAIA” is the Promotion of Access to Information Act, 2000 which can be used to request access to all information including personal information that we may have in our records. For more information regarding the PAIA process.
                </p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>

        </section>
    );
};

export default DifferencePOPWithPAI;