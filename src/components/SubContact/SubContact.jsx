import React from 'react';

const SubContact = () => {
    return (
        <div className='w-full bg-white shadow rounded p-4 my-10'>
            <div className='w-full bg-primary bg-opacity-10 py-5 flex items-center gap-10'>
                <div>
                    <img src="https://media.takealot.com/help-cms/original_images/____CMS__d0da6dca9d77bd5c950880ccb158ac07bcea8752.png" alt="" className='w-32' />
                </div>

                <div className='w-full flex flex-col gap-2 lg:flex-row items-center'>
                    <div className='flex-1'>
                        <p className='text-lg font-semibold'>Didn't find what you need?</p>
                    </div>

                    <div className='mr-5'>
                        <button className='text-sm py-2 px-7 border border-primary bg-primary rounded text-white font-semibold'>Contact Us</button>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default SubContact;