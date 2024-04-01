import React from 'react';
import SubContact from '../../components/SubContact/SubContact';
import Accrodio from '../../components/Accordion/Accrodio';
import { Link } from 'react-router-dom';

const ReturnProduct = () => {

    const accordion = [
        {
            path: "",
            title: "Can I return my product"
        },

        {
            path: "",
            title: "How do I return a manufacturer warranty product ?"
        },

        {
            path: "",
            title: "All about return methods & fees"
        }

    ]


    return (
        <section className='w-[82%]'>

            <div className='text-sm bg-white p-8'>
                <ol className='list-decimal'>
                    <li className='py-1'><div className="hidden lg:block breadcrumbs py-3">
                        <ul>
                            <li>Go to My Account</li>
                            <li><Link className='text-blue-500'>Returns</Link></li>
                        </ul>
                    </div>
                    </li>
                    <li className='py-1'>Select the ‘Log Return’ button</li>
                    <li className='py-1'>Select the order containing the item/s you wish to return


                    </li>
                    <li className='py-1'>Select the item you want to return, and choose the most relevant ‘Reason for Return’
                    </li>
                    <li className='py-1'>Select your ‘Preferred Outcome’:
                    </li>
                </ol>

                <ul className='list-disc py-3'>
                    <li className='py-1'>Credit my Takealot Account</li>
                    <li className='py-1'>Refund to Original Payment Method
                    </li>
                    <li className='py-1'>Replace Item
                    </li>
                </ul>

                <ol className='list-decimal py-3'>
                    <li className='py-1'>If applicable, complete any additional information requested
                    </li>
                    <li className='py-1'>Select the ‘Continue’ button
                    </li>
                    <li className='py-1'>Select ‘Add Another Item’ should you wish to return multiple products
                    </li>
                </ol>

                <p className='py-4 italic'>Note: Only products from the same order can be added to one return request

                </p>

                <ol className='list-decimal py-3'><li>Once you have added the items you wish to return, select the ‘Select Return Method’ button
                </li>
                    <li className='py-1'>Select your preferred return method: ‘Return to a Takealot Pickup Point’ or ‘Collect from my address’
                    </li>
                    <li className='py-1'>Add your preferred contact details to receive collection notifications via SMS
                    </li></ol>

                <p className='py-3 italic'>Note: Return status email updates will only be sent to the Takealot account holder who logged the return request

                </p>
                <ol className='py-3 list-decimal'>
                    <li>Submit your return request and await feedback via email
                    </li>
                </ol>

                <h1 className='font-bold text-base py-3'> Additional Info: </h1>

                <ul className='list-disc py-3'>
                    <li className='py-1'>Returns for gifts may only be logged by the Takealot account holder who purchased the product
                    </li>
                    <li className='py-1'>You will receive updates on the status of your return via email. You can also track your return by going to <span className="hidden lg:block breadcrumbs py-3">
                        <ul>
                            <li>Go to My Account</li>
                            <li><Link className='text-blue-500'>Orders</Link></li>
                        </ul>
                    </span>
                    </li>
                </ul>

            </div>

            {/* contact  */}
            <SubContact></SubContact>


            {/* accordion */}
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

export default ReturnProduct;