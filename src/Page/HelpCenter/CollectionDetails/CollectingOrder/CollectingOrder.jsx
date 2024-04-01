import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';
import { Link } from 'react-router-dom';

const CollectingOrder = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white p-8 text-sm'>
                <p className='py-3'>You can collect your order from a Takealot Pickup Point after you receive your QR code.

                </p>

                <p className='py-3'>If you would like someone to collect your order on your behalf, provide them with your QR code or unique PIN found on the Order Tracking page, SMS received or in the ‘Order Ready For Collection’ email

                </p>

                <p className='py-3'>To view your QR code and unique PIN on the Order Tracking Page:

                </p>

                <ul className='list-disc py-5'>
                    <li> <div className="hidden lg:block breadcrumbs py-3">
                        <ul>
                            <li>Go to My Account</li>
                            <li><Link className='text-blue-500'> Track Order </Link></li>
                        </ul>
                    </div>
                    </li>

                    <li className='py-2'>Choose the order
                    </li>
                    <li className='py-2'>Click the QR code button
                    </li>
                </ul>

                <p className='py-3'> <b>Note: </b> The QR code button only becomes available when your order is ready for collection. Collect your order within 7 days.

                </p>

                <p className='py-3'>If not collected by the expiry date, your order will be returned to our warehouse. Your Takealot account will automatically be credited to the value of your order, excluding the collection fee.

                </p>

            </div>

            {/* contact part */}
            <SubContact></SubContact>


        </section>
    );
};

export default CollectingOrder;