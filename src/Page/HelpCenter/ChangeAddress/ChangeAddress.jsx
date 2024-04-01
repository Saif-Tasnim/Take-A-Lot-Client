import React from 'react';
import { Link } from 'react-router-dom';
import SubContact from '../../../components/SubContact/SubContact';
import Accrodio from '../../../components/Accordion/Accrodio';

const ChangeAddress = () => {

    const accordion = [
        {
            path: "/help-centre/deliveryDetails/reschedule-delivery",
            title: "Reschedule your delivery"
        },
        {
            path: "",
            title: "How do I cancel my order ?"
        },
    ]

    return (
        <section className='w-[82%]'>
            <div className='bg-white p-8 text-sm'>
                <p className='pb-6'>
                    Changing your delivery address after placing an order is not possible. If you are not available <br /> to receive your order at your original delivery address, you are able to reschedule~ your delivery date here should your order be  eligible, otherwise select the Contact Us button below.
                </p>

                <p className='py-9'>
                    To change your delivery address permanently for future orders, you can update your address under
                    <span className="hidden lg:block breadcrumbs py-3">
                        <ul>
                            <li>My Account</li>
                            <li><Link className='text-blue-500'>Address Book.</Link></li>
                        </ul>

                    </span></p>

            </div>

            {/* contact */}
            <SubContact></SubContact>

            <h1 className='my-14 font-bold text-2xl'> Related Topics </h1>

            {/* accordion part */}
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

export default ChangeAddress;