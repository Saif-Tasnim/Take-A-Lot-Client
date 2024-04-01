import React from 'react';
import { Link } from 'react-router-dom';

const NextBusiness = () => {
    return (
        <section className='w-[82%]'>

            <div className='bg-white p-8 text-sm'>
                <p className='py-5'> If your order is eligible for next business day delivery, it will be displayed as a delivery option during checkout. <b> A ‘Next Day’ badge seen on the product details page does not guarantee next day delivery.</b>
                </p>

                <p className='py-6'> We offer next business day delivery during checkout if all products in the order meet the following criteria: </p>

                <ul className='list-disc'>
                    <li className='py-2'>All products in the order must be in-stock</li>

                    <ul className='list-inside list-[circle] py-2'>
                        <li className='py-1'> For Cape Town Metro customers, all products must be in-stock at the Cape Town distribution centre</li>
                        <li className='py-1'>For Johannesburg, Pretoria and Durban customers, all products must be in-stock at the Johannesburg distribution centre</li>
                        <li className='py-1'>For all other areas, all products must be in-stock at the nearest distribution centre</li>
                    </ul>

                    <li className='py-2'>No products longer than 1.4 meters in length and width</li>
                    <li className='py-2'>No bulky products (35 kg volumetric or more)</li>
                </ul>

                <p className='py-7'>In addition, please note: </p>

                <ul className='list-inside list-disc'>
                    <li className='py-2'>Eligibility is subject to available courier capacity at the time the order is placed
                    </li>
                    <li className='py-2'>Alcoholic products are limited to delivery only and cannot be collected
                    </li>
                    <li className='py-2'>Next business day delivery may be subject to a premium delivery fee
                    </li>
                </ul>
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

{/* accordion part */}
            <h1 className='my-14 font-bold text-2xl'> Related Topics </h1>

            {/* accordion part */}

            <div className="join join-vertical w-full bg-white">
                <div className="collapse collapse-arrow join-item border py-3">
                    <input type="radio" name="my-accordion-4" />
                    
                    <Link 
                    to="/help-centre/deliveryDetails/about-delivery-options-time-frames"
                    className="collapse-title text-lg font-medium hover:underline hover:text-blue-500">
                        About delivery options & time frames
                    </Link>
                </div>
            </div>

        </section>
    );
};

export default NextBusiness;