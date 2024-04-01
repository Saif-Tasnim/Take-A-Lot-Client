import React from 'react';
import { Link } from 'react-router-dom';
import SubContact from '../../../components/SubContact/SubContact';
import Accrodio from '../../../components/Accordion/Accrodio';

const DeliveryTimeFrames = () => {

    const accordion = [
        {
            path: "/help-centre/collectionDetails/about-collection-options-time-frames",
            title: "About collection options & time frames",
        },
        {
            path: "/help-centre/deliveryDetails/delivery-fees",
            title: "About delivery fees",
        },
    ]

    return (
        <section className="w-[82%]">
            <div className='bg-white text-sm p-8 '>
                <p> Takealot offers two safe and convenient methods for receiving your order:</p>


                <ul className='list-inside list-disc py-7'>
                    <li className='py-1'>Delivery - We courier directly to your door, anywhere in South Africa. All delivery details are provided at checkout.</li>
                    <li className='py-1'>Collect - You can choose to collect from a Takealot Pickup Point near you.</li>
                </ul>

                <p className='py-5'>
                    Our picking, packing and delivery is linked to what you order, where you want it delivered or collected and how you choose to pay. Delivery times may vary. Estimates are provided below to help you shop, but always check your order’s estimated delivery date during checkout for the most accurate delivery information. </p>


                {/* table - 1 with caption */}
                <h1 className='text-center font-bold text-md py-3'> Standard Delivery </h1>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className='bg-primary text-white text-sm'>
                                <th>Delivery Destination</th>
                                <th>Delivery Time </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>Cape Town, Johannesburg, Pretoria</td>
                                <td>	2-5 working days </td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>Regional Area</td>
                                <td> 2-6 working days </td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td>Remote Area</td>
                                <td>	3-7 working days </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                {/* table - 2 with caption */}
                <h1 className='text-center font-bold text-md pt-8 pb-3'> Premium Delivery Options* </h1>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className='bg-primary text-white text-sm'>
                                <th>Delivery Type</th>
                                <th>Delivery Time </th>
                                <th>Cut Off Time </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>Same Day Delivery</td>
                                <td>Same day between 3pm – 7pm</td>
                                <td>Pay before 10:00 am weekdays</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>Next Business Day Delivery</td>
                                <td>Next working day between 7am – 7pm </td>
                                <td>Pay before 11:59 pm previous day </td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td>Saturday Delivery</td>
                                <td>Saturday between 11am – 7pm</td>
                                <td>Pay before 11:59 pm Friday</td>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <td>Sunday Delivery</td>
                                <td>Sunday between 11am – 7pm</td>
                                <td>Pay before 10:00 am Saturday</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            {/* contact */}
            <SubContact></SubContact>


            <h1 className='my-10 font-bold text-2xl'> Related Topics </h1>


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

export default DeliveryTimeFrames;