import React from 'react';
import { Link } from 'react-router-dom';
import SubContact from '../../../components/SubContact/SubContact';

const RescheduleCollection = () => {
    return (
        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>

                <p className='pb-4'>It is possible to reschedule the collection of your return only if:    </p>

                <ul className='list-inside list-disc'>
                    <li className='py-1'>You have received an SMS confirming your scheduled return collection date
                    </li>
                    <li className='py-1'>You have not exceeded the maximum number of return collection reschedule requests. (Note: Only two reschedule requests can be made per return.)
                    </li>
                </ul>

                <p className='py-6'>To reschedule the collection on your return, follow the below steps:
                </p>

                <ul className='list-disc'>
                    <li className="breadcrumbs py-2">
                        <ul>
                            <li>Go to My Account</li>
                            <li><Link className='text-blue-500'>Orders</Link></li>
                        </ul>

                    </li>
                    <li className='py-2'>Select the return you would like to reschedule
                    </li>
                    <li className='py-2'>A “Reschedule Collection” button will be displayed only if the return is eligible for rescheduling
                    </li>
                    <li className='py-2'>Click “Reschedule Collection” to view a calendar of available collection dates
                    </li>
                    <li>Choose a new collection date from the available options and click “Save Date”
                    </li>
                    <li className='py-2'>A confirmation message will be displayed to confirm that the rescheduling has been successful
                    </li>
                </ul>
            </div>

            {/* Contact Part */}
            <SubContact></SubContact>

        </section>
    );
};

export default RescheduleCollection;