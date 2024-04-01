import React from 'react';
import SubContact from '../../../components/SubContact/SubContact';
import Accrodio from '../../../components/Accordion/Accrodio';
import { Link } from 'react-router-dom';

const ReplaceProduct = () => {

    const accordion = [{
        path: "/help-centre/returnDetails/can-i-return-my-product",
        title: "Can I return my product"
    }]


    return (
        <section className='w-[82%]'>

            <div className='text-sm bg-white p-8'>

                <p className='pb-3'>Yes, we offer exchanges for size and colour variations within 30 days of delivery or collection. We offer replacements for the following:

                </p>

                <ul className='py-3 list-disc'>
                    <li className='py-1'>The product is defective or damaged
                    </li>
                    <li className='py-1'>The product is not what you ordered or not as described
                    </li>
                </ul>

                <p className='py-3'>To exchange for a different size / colour: </p>

                <ol className='list-decimal pu-3'>
                    <li><span className="hidden lg:block breadcrumbs py-3">
                        <ul>
                            <li>Go to My Account</li>
                            <li><Link className='text-blue-500'>Returns</Link></li>
                        </ul>
                    </span></li>

                    <li className='py-1'>Select the ‘Log Return’ button
                    </li>
                    <li className='py-1'>Choose the relevant order
                    </li>
                    <li className='py-1'>Select the <b>“Reason for return”</b> as <b>“I want to exchange it for different size/colour”</b>
                    </li>
                </ol>

                <p className='italic py-4'>Note: If you do not see this return reason, your product is unfortunately not eligible for exchange. You can still return the product for a full credit or refund by selecting “I have changed my mind” as the return reason.</p>

                <ol className='list-decimal py-4'>
                    <li className='py-1'>Select your preferred size/colour
                    </li>
                    <li className='py-1'>If applicable, complete any additional information as requested
                    </li>
                    <li className='py-1'>Click the ‘Submit Return Request’ button
                    </li>
                </ol>

                <p className='italic py-4'>To request a replacement for defective, damaged or not what you ordered products:</p>

                <ol className='list-decimal py-3'>
                    <li><span className="hidden lg:block breadcrumbs py-3">
                        <ul>
                            <li>Go to My Account</li>
                            <li><Link className='text-blue-500'> Returns </Link></li>
                        </ul>
                    </span></li>
                    <li className='py-1'>Select the <b>‘Log Return’</b> button
                    </li>
                    <li className='py-1'>Choose the relevant order
                    </li>
                    <li className='py-1'>Select the item you want to return, and choose the most relevant <b>‘Reason for Return’</b>
                    </li>
                    <li className='py-1'>Select the <b>“Preferred outcome”</b> as <b>“Replace item”</b>
                    </li>
                    <li className='py-1'>If applicable, complete any additional information as requested
                    </li>
                </ol>

                <p className='py-4'>Click the <b>‘Submit Return Request’</b> button

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

export default ReplaceProduct;