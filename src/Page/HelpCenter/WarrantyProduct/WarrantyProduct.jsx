import React from 'react';
import SubContact from '../../../components/SubContact/SubContact';
import Accrodio from '../../../components/Accordion/Accrodio';
import { Link } from 'react-router-dom';

const WarrantyProduct = () => {
    const accordion = [
        {
            path: "/help-centre/returns/can-i-return-my-product",
            title: "Can I return my product ?"
        }
    ]

    return (
        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>
                <p className='pb-2'> A Manufacturer Warranty product is a product whereby the relevant supplier or manufacturer chooses to manage defective product returns directly with the customer.</p>

                <ol className='py-3 list-decimal'>
                    <li><span className="hidden lg:block breadcrumbs py-3">
                        <ul>
                            <li>Go to My Account</li>
                            <li><Link className='text-blue-500'> Returns </Link></li>
                        </ul>
                    </span></li>

                    <li className='pb-2'>Select the <b>‘Log Return’</b> button </li>
                    <li>Select the order containing the product you wish to return
                    </li>
                    <li className='py-2'>Instructions on how to proceed with your Manufacturer Warranty product return will be provided on this page
                    </li>
                </ol>

                <h4 className='py-3 font-bold'>Additional Info: </h4>

                <p className='py-4'>A Manufacturer Warranty comes into effect after 7 days of receiving the product and is only applicable to defective products. Returns for any other reason will be facilitated by Takealot provided the return is logged within 30 days of receiving the product. </p>
            </div>

            {/* contact part */}
            <SubContact></SubContact>

            {/* accordion part */}
            <h1 className='my-14 font-bold text-2xl'> Related Topics </h1>
            {
                accordion.map((acc, index) => <Accrodio
                    key={index}
                    path={acc.path}
                    title={acc.title}
                ></Accrodio>)
            }

        </section>
    );
};

export default WarrantyProduct;