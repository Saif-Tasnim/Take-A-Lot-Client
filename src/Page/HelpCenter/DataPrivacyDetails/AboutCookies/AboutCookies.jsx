import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const AboutCookies = () => {
    return (
        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>
                <p className='py-3'> Cookies are small text files placed on the device that you use to access our platform.

                </p>
                <p className='py-3'> Takealot uses cookies and/or user tracking to improve your experience on our website. These files do not contain or collect any personal information but merely allow us to associate you with a particular device.

                </p>

                <h3 className='text-base font-bold'>Seeing Takealot adverts on third-party websites/applications
                </h3>

                <p className='py-3'> You may see adverts from our platforms after visiting them because of cookies. For more information on this please visit our Privacy Policy or Contact Us on the button below.

                </p>

            </div>
            
            {/* contact part */}
            <SubContact></SubContact>
       
        </section>
    );
};

export default AboutCookies;