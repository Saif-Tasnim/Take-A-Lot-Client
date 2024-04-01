import React from 'react';
import { Link } from 'react-router-dom';

const SplitDelivery = () => {
    return (
        <section className='w-[82%]'>

            <div className='bg-white p-8 text-sm'>
                <p className='py-3'> On every product page, you can see if an item is 'in stock' at a Takealot warehouse or if it needs to be shipped from a supplier.
                </p>

                <p className='py-3'> For the most efficient delivery service, we wait until all of your order items arrive at a warehouse before delivering to you.</p>

                <p className='py-4'> On select orders, we may be able to split your order, allowing your in-stock items to arrive sooner. If you want to request a split delivery or collection at a Takealot Pickup Point, select Contact Us below to provide us with the required order information.</p>

                <p className='py-4'> <b>PLEASE NOTE:</b> If either part of your new split delivery falls below R500, free delivery can no longer apply and our  <a href="#" target='_blank' className='text-blue-500'>standard delivery cost</a> will be charged.</p>
            </div>

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
                    to="/help-centre/deliveryDetails/reschedule-delivery"
                    className="collapse-title text-lg font-medium hover:underline hover:text-blue-500">
                        Reschedule Your Delivery
                    </Link>
                </div>

                <div className="collapse collapse-arrow join-item border py-3">
                    <input type="radio" name="my-accordion-4" />
                    
                    <Link 
                    to="/help-centre/deliveryDetails/track-order"
                    className="collapse-title text-lg font-medium hover:underline hover:text-blue-500">
                        Track your Order
                    </Link>
                </div>
            </div>

        </section>
    );
};

export default SplitDelivery;