import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';
import { Link } from 'react-router-dom';

const RequestInvoice = () => {

    return (
        
        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>
                <p className='py-4'>You can request an invoice for an order which has already been delivered or collected. Follow these easy steps:
                </p>

                <ol className='list-decimal py-4'>
                    <li><span className="hidden lg:block breadcrumbs py-3">
                        <ul>
                            <li>Go to My Account</li>
                            <li><Link className='text-blue-500'> Invoices </Link></li>
                        </ul>
                    </span></li>
                    <li className='py-3'>Choose the relevant order
                    </li>
                </ol>

                <p className='py-4'>Next, you will see a list of <b>invoices per seller</b>: </p>

                <ul className='list-disc py-4'>
                    <li className='py-2'>Order items sold by Takealot will be grouped together in a readily-available invoice.
                    </li>
                    <li className='py-2'>Invoices for order items <b>sold by</b> other sellers, not Takealot, will need to be requested from the Seller.
                    </li>
                </ul>


                <p className='py-4'>For Takealot invoices: </p>

                <ol className='list-decimal py-4'>
                    <li className='py-2'>Select ‘Download Invoice’ </li>
                    <li className='py-2'>A pdf invoice will be downloaded to your device </li>
                </ol>

                <p className='py-4'>For Seller invoices: </p>
                <ol className='list-decimal'>
                    <li className='py-2'>Select ‘Request Invoice’
                    </li>
                    <li className='py-2'>Write an optional message to the Seller
                    </li>
                    <li className='py-2'>Select ‘Submit Request’
                    </li>
                    <li className='py-2'><b>Wait for the Seller</b> to upload the invoice. It may take a few days. Once ready, the invoice will become available on this same My Account - Invoices page
                    </li>

                </ol>

                <p className='py-4'> <b>Note:</b> Invoices are currently not available for viewing on the app. Please use the desktop or mobile website.

                </p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>

        </section>
    );
};

export default RequestInvoice;