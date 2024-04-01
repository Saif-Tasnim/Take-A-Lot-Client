import React from 'react';
import { Link } from 'react-router-dom';

const RescheduleDelivery = () => {
    return (
        <section className='w-[82%]'>
           
            <div className='bg-white p-8 text-sm'>
                <p className='pb-6'>Please note that rescheduling your delivery is only possible if: </p>

                <ul className='list-disc'>
                    <li className='pb-4'> You have received an SMS confirming your scheduled delivery date.</li>
                    <li className='pb-4'>Your order is being delivered by the Takealot Delivery Team instead of a third-party courier partner. The Order Tracking page displays which courier is delivering your order.</li>
                    <li className='pb-4'>You have not exceeded the maximum number of delivery reschedule requests. Please note only two delivery reschedule requests can be made.</li>
                </ul>

                <p className='py-5'> To reschedule your delivery, follow the below steps: </p>

                <ul className='list-disc'>
                    <li className="hidden lg:block breadcrumbs py-3">
                        <ul className='list-disc'>
                            <li>Go to My Account</li>
                            <li><Link className='text-blue-500'>Orders</Link></li>
                        </ul>

                    </li>

                    <li className='pb-4'>Select the order you wish to reschedule</li>
                    <li className='pb-4'>A “Reschedule Delivery” button will be displayed if your order is eligible for rescheduling</li>

                    <li className='pb-4'>Click “Reschedule Delivery” to view a calendar of available delivery dates</li>
                    <li className='pb-4'>Choose a new delivery date from the available options and click “Save Date”</li>
                    <li className='pb-4'>A confirmation message will be displayed to confirm that the rescheduling has been successful.</li>
                </ul>


                <p className='py-4'>If your delivery is not eligible for rescheduling <b>and you will not be available to receive the order,</b> please select Contact Us below.

                </p>
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

export default RescheduleDelivery;