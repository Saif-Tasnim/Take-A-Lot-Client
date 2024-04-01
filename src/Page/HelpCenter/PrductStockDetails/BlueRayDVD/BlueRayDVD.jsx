import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const BlueRayDVD = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>

                <p className='py-4'>Some Blu-ray discs may be region locked, which means that they won’t play on your Blu-ray player, PlayStation Xbox. South Africa falls under Region B for Blu-Ray Discs, but most Blu-ray disks are region-free and will play on any player.
                </p>

                <img src="https://media.takealot.com/help-cms/original_images/____CMS__ae1ff8fa60a977629378653dfb574df7670c730e.png" alt="" />

            </div>

            {/* contact part */}
            <SubContact></SubContact>
            
        </section>
    );
};

export default BlueRayDVD;