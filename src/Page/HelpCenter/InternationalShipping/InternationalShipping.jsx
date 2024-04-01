import React from 'react';
import { Link } from 'react-router-dom';

const InternationalShipping = () => {
    
    return (
        
        <section className='w-[82%]'>
           
            <div className='bg-white p-8 text-sm'>
                <p className='pb-6'>We do not ship outside of South African borders at this time. However, we will ship UNISA prescribed textbooks internationally.</p>

           

                <p className='py-5'> You can request for more information by selecting Contact Us and completing the form. </p>

          
            </div>

{/* contact part */}
            <div className='w-full bg-white shadow rounded p-4 my-5'>
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

        </section>
    );
};

export default InternationalShipping;