import React from 'react';
import SubContact from '../../../components/SubContact/SubContact';
import Accrodio from '../../../components/Accordion/Accrodio';
import { Link } from 'react-router-dom';

const WrongProduct = () => {
    const accordion = [
        {
            path: "/help-centre/returnDetails/return-my-product",
            title: "How do I return my product ? "
        },
        {
            path: "/help-centre/returnDetails/exchange-or-replace-product",
            title: "Can I exchange or replace a product ? "
        },
    ]

    return (
        <section className='w-[82%]'>
            <div className='bg-white text-sm p-8'>
                <p className='py-4'>If we accidentally delivered the wrong product to you, or if the product is not as described on the website or app, please notify us within 30 days by following the steps below and we will collect the product from you at no charge:

                </p>

                <ol className='list-decimal py-5'>
                    <li><span className="hidden lg:block breadcrumbs py-3">
                        <ul>
                            <li>Go to My Account</li>
                            <li><Link className='text-blue-500'> Returns </Link></li>
                        </ul>
                    </span></li>

                    <li className='pb-2'>Select the <b>‘Log Return’</b> button </li>
                    <li>Choose the relevant order</li>
                    <li className='py-2'>Choose the relevant product</li>
                    <li className='py-2'>Select <b>‘The product is not what I ordered or not as described’</b> as your return reason
                    </li>
                    <li className='py-2'>Provide a detailed description of the product received
                    </li>
                    <li className='py-2'>If applicable, complete any additional information as requested
                    </li>
                    <li className='py-2'>Click the <b>‘Submit Return Request’</b> button
                    </li>
                </ol>

                <h3 className='font-bold py-4'>Additional Info:</h3>

                <p className='py-2'>If you have selected ‘Replace Item’ as your preferred outcome, one of our customer service agents will reach out to you via email for more detailed information about the product received.

                </p>
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

export default WrongProduct;