import React from 'react';
import { Link } from 'react-router-dom';
import SubContact from '../../../components/SubContact/SubContact';
import Accrodio from '../../../components/Accordion/Accrodio';

const ReturnProducts = () => {
    const accordion = [
        {
            path: "",
            title: "How do I return my product ?"
        },
        {
            path: "",
            title: "How do I return a manufacturer warranty product ?"
        },
        {
            path: "",
            title: "All About returns method & fees ?"
        },
        {
            path: "",
            title: "Can I exchange or replace a product ?"
        },
        {
            path: "",
            title: "Returning a product without accessories or its partner product"
        },

    ]


    return (
        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>
                <p className='pb-4'>To check whether your product is eligible for return: </p>

                <ol className='list-decimal ml-6'>
                    <li> <div className="breadcrumbs py-3">
                        <ul>
                            <li>Go to My Account</li>
                            <li><Link className='text-blue-500'>Orders</Link></li>
                        </ul>
                    </div>
                    </li>

                    <li className='py-3'> Select the ‘Log Return’ button </li>
                    <li className='py-3'>Select the order containing the item to check for eligibility
                    </li>
                    <li className='py-3'>Returnable and Non-Returnable products will then be displayed  </li>

                </ol>

                <h1 className='pt-4 pb-2 font-bold'> Product Packaging </h1>

                <p className='py-4'>If you have changed your mind and would like to return an unwanted product, note that these items can only be returned if they are in the original product packaging with all seals intact, including labels and stickers</p>

                <p className='py-3'>Please refer to our Returns Policy for more information.</p>

                <ul className='list-disc py-2'>
                    <li className='py-1'>You do not need to return the items in the original Takealot delivery boxes
                    </li>
                    <li className='py-1'>Defective products without the original product packaging can be returned within 6 months of delivery or collection, or within the stipulated warranty period of the relevant product</li>
                </ul>

                <h2 className='pt-4 font-bold pb-2'>Non – Returnable Products </h2>

                <p className='py-3'>Non-Returnable products are typically products which:</p>

                <ul className='list-disc'>
                    <li className='py-1'>Fall outside of the product warranty period </li>
                    <li className='py-1'>Are listed on our website as Non-Returnable (as stipulated on the product details page)
                    </li>
                    <li className='py-1'>Are digital products, including
                        <ul className='list-inside list-[circle]'>
                            <li className='py-1'>Airtime</li>
                            <li className='py-1'>Data bundles
                            </li>
                            <li className='py-1'>Online courses </li>
                            <li className='py-1'>Takealot vouchers

                            </li>
                        </ul>

                    </li>
                    <li className='py-1'>Are manufacturer warranty products
                    </li>
                </ul>

            </div>

            {/* contact part */}
            <SubContact></SubContact>

            <h1 className='my-14 font-bold text-2xl'> Related Topics </h1>

            {/* accordion part */}
            {
                accordion.map((ac, index) => <Accrodio
                    key={index}
                    title={ac.title}
                    path={ac.path}
                ></Accrodio>)
            }

        </section>
    );
};

export default ReturnProducts;