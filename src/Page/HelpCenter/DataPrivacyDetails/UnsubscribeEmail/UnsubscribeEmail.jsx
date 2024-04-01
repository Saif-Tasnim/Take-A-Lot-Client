import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const UnsubscribeEmail = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>
                <p className='py-4'>To update your newsletter preferences, go to My Account and click on Newsletters Subscriptions under the Customer Information section. You can update and manage your subscriptions by ticking the available options.
                </p>

                <p className='py-4'>If you no longer wish to receive any newsletters you can tick the last box, <b>Unsubscribe from all Takealot newsletters</b>, and then click on the <b>Save Preferences</b> button.
                </p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>

        </section>
    );
};

export default UnsubscribeEmail;