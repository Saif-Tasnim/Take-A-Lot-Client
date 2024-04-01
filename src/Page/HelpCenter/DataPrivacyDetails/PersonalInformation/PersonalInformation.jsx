import React from 'react';
import { Link } from 'react-router-dom';
import SubContact from '../../../../components/SubContact/SubContact';

const PersonalInformation = () => {
    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>
                <p>You can access and manage your personal information in My Account. Here you will have access to:
                </p>

                <ul className='list-inside list-disc py-2'>
                    <li> <Link to="" className='text-primary hover:underline'>Personal Details</Link></li>

                    <li> <Link to="" className='text-primary hover:underline'>Address Book</Link></li>

                    <li> <Link to="" className='text-primary hover:underline'>Newsletter Subscriptions</Link></li>

                    <li> <Link to="" className='text-primary hover:underline'>Orders</Link></li>

                    <li> <Link to="" className='text-primary hover:underline'>Invoices</Link></li>

                    <li> <Link to="" className='text-primary hover:underline'>Exchanges & Returns</Link></li>

                    <li> <Link to="" className='text-primary hover:underline'>Credit & Refunds</Link></li>

                    <li> <Link to="" className='text-primary hover:underline'>Wish Lists</Link></li>

                    <li> <Link to="" className='text-primary hover:underline'>Product Reviews</Link></li>

                    <li> <Link to="" className='text-primary hover:underline'>eBook Digital Library</Link></li>
                </ul>

                <p className='text-lg font-bold py-3'>All other information</p>

                <p className='py-3'>You can also request the above information and more by submitting a Personal Information Request.

                </p>
                <p className='text-lg font-bold py-3'>Request your personal information
                </p>

                <p className='py-3'>To access personal information which isn't available in My Account e.g. your order history older than six years, please follow the below steps:

                </p>

                <ul className='list-inside list-[circle] py-3'>
                    <li className='py-2'>Go to Request Personal Information.</li>
                    <li className='py-2'>Log into your Takealot account.</li>
                    <li className='py-2'>Click the <b>Submit Request</b> button.</li>
                    <li className='py-2'>We will send a confirmation link to you via email. Click the link to verify your request.</li>
                    <li className='py-2'>A secure download link will be emailed to you after your request has been processed.</li>
                </ul>

                <p className='py-2'>Read our Privacy Policy to find out more about how we collect and use your personal information.
                </p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>
        </section>
    );
};

export default PersonalInformation;