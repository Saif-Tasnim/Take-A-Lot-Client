import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TrackOrder = () => {


    return (
        <div>

            <div className='border-2 bg-white p-8 text-sm'>
                <p className='mt-3 mb-6'> We will deliver your order by the Estimated Delivery Date provided in your Payment Confirmation or Order Placed email.</p>

                <p className='py-4'> To track your order: </p>

                <ol className='list-decimal ml-6'>
                    <li> <div className="hidden lg:block breadcrumbs py-3">
                        <ul>
                            <li>Go to My Account</li>
                            <li><Link className='text-blue-500'>Orders</Link></li>
                        </ul>
                    </div>
                    </li>

                    <li className='py-3'> Choose the order you wish to track </li>
                    <li className='py-3'>Click the <span className='font-bold'> <sup>'</sup> Track <sup>'</sup> </span> button  </li>

                </ol>

                <p className='my-5'> This is the most current tracking information we have for your order. If this date changes, we will let you know as soon as possible via email or SMS. </p>


                <p>    If the estimated delivery date for your order has passed and your tracking information hasn't changed, please select the Contact Us button below.</p>
            </div>

            {/* contact part */}

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


            {/* accordion part  */}

            <h1 className='my-14 font-bold text-2xl'> Related Topics </h1>

            <div className="join join-vertical w-full bg-white">
                <div className="collapse collapse-arrow join-item border py-3">
                    <input type="radio" name="my-accordion-4" />

                    <Link
                        to="/help-centre/deliveryDetails/delivery-fees" className="collapse-title text-lg font-medium hover:underline hover:text-blue-500">
                        About delivery fees
                    </Link>
                </div>

                <div className="collapse collapse-arrow join-item border py-3">
                    <input type="radio" name="my-accordion-4" />

                    <Link
                        to="/help-centre/deliveryDetails/split-requests"
                        className="collapse-title text-lg font-medium hover:underline hover:text-blue-500">
                        Split delivery requests
                    </Link>
                </div>

                <div className="collapse collapse-arrow join-item border py-3">
                    <input type="radio" name="my-accordion-4" />

                    <Link
                        to="/help-centre/deliveryDetails/reschedule-delivery"
                        className="collapse-title text-lg font-medium hover:underline hover:text-blue-500">
                        Reschedule your delivery
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default TrackOrder;