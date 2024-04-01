import React from 'react';
import SubContact from '../../../components/SubContact/SubContact';
import Accrodio from '../../../components/Accordion/Accrodio';

const ReturnMethodFees = () => {
    const accordion = [{
     path: "/help-centre/returnDetails/return-my-product",
     title: "How do I return my product"
    }]


    return (
        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>
                <p>If your order is eligible for next business day delivery, it will be displayed as a delivery option during checkout. <b>A ‘Next Day’ badge seen on the product details page does not guarantee next day delivery.</b> </p>

                <p className='pt-8 pb-3'>We offer next business day delivery during checkout if all products in the order meet the following criteria: </p>

                <ul className='list-outside list-disc py-3'>
                    <li className='py-1'>All products in the order must be in-stock

                        <ul className='list-inside list-[circle] py-1'>
                            <li className='py-1'>For Cape Town Metro customers, all products must be in-stock at the Cape Town distribution centre
                            </li>
                            <li className='py-1'>For Johannesburg, Pretoria and Durban customers, all products must be in-stock at the Johannesburg distribution centre
                            </li>
                            <li className='py-1'>For all other areas, all products must be in-stock at the nearest distribution centre
                            </li>
                        </ul>
                    </li>

                    <li className='py-1'>
                        No products longer than 1.4 meters in length and width
                    </li>

                    <li className='py-1'>No bulky products (35 kg volumetric or more)
                    </li>
                </ul>

                <p className='py-4'>In addition, please note: </p>

                <ul className='list-outside list-disc py-2'>
                    <li className='py-1'>Eligibility is subject to available courier capacity at the time the order is placed
                    </li>
                    <li className='py-1'>Alcoholic products are limited to delivery only and cannot be collected
                    </li>
                    <li className='py-1'>Next business day delivery may be subject to a premium delivery fee
                    </li>
                </ul>

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

export default ReturnMethodFees;