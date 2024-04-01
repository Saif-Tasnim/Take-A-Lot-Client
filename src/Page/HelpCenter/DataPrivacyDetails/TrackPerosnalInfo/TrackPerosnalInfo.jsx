import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const TrackPerosnalInfo = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>
                <p className='py-4'>Your request may take up to 30 days to process. To finalise your personal information or account deletion request, we will send you an email to the address associated with the relevant account.
                </p>

                <p className='py-4'>To confirm your request, you will need to verify the link within 48 hours or the request will automatically expire.
                </p>

                <p className='py-4'>Please note if you have submitted a request for deletion, we will begin the deletion process by deactivating your account. If you have placed an order within six months of your deletion request, this will delay the deletion process in order for us to facilitate returns in accordance with the Consumer Protection Act, 68 of 2008.
                </p>

                <p className='py-4'>If you have not received any communication from us after 30 days, please check your Spam folder or click Contact Us below.
                </p>

            </div>

            {/* contact part */}
            <SubContact></SubContact>
        </section>
    );
};

export default TrackPerosnalInfo;