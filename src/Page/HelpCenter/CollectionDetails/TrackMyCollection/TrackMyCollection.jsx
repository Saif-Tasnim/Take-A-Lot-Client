import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';
import Accrodio from '../../../../components/Accordion/Accrodio';
import { Link } from 'react-router-dom';

const TrackMyCollection = () => {
    const accordion = [
        {
            path: "/help-centre/collectionDetails/collecting-order",
            title: "Collecting your order"
        },
        {
            path: "/help-centre/collectionDetails/change-delivery-method",
            title: "Changing my delivery method or selected Takealot pickup point"
        },
    ]


    return (

        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>

                <p className='py-4'>Your order will be ready for collection by the Estimated Collection Date provided in your Payment Confirmation email.

                </p>

                <p className='py-4'>To track your order: </p>

                <ul className='list-disc py-5'>
                    <li> <div className="hidden lg:block breadcrumbs py-3">
                        <ul>
                            <li>Go to My Account</li>
                            <li><Link className='text-blue-500'>Orders</Link></li>
                        </ul>
                    </div>
                    </li>

                    <li className='py-2'>Choose the order you wish to track
                    </li>
                    <li className='py-2'>Click the ‘Track’ button
                    </li>
                </ul>

                <p className='py-3'>This is the most current tracking information we have for your order. If this date changes, we will let you know as soon as possible via email.

                </p>

                <p className='py-3'>You will receive an email and SMS with instructions and a collection QR code when your order is ready for collection at your chosen Takealot Pickup Point.

                </p>

                <p className='py-3'>If the estimated collection date for your order has passed and your tracking information hasn't changed, please select Contact Us below.

                </p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>

            {/* accordion part */}
            <h1 className='my-10 font-bold text-2xl'> Related Topics </h1>

            {
                accordion.map((acc, index) => <Accrodio
                    key={index}
                    path={acc.path}
                    title={acc.title}
                ></Accrodio>)}
        </section>
    );
};

export default TrackMyCollection;