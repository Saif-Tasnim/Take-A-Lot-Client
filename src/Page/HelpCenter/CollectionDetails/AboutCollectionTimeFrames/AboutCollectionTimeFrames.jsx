import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';
import Accrodio from '../../../../components/Accordion/Accrodio';

const AboutCollectionTimeFrames = () => {

    const accordion = [
        {
            path: "/help-centre/deliveryDetails/about-delivery-options-time-frames",
            title : "About delivery options & time frames"
        },
        {
            path: "/help-centre/deliveryDetails/delivery-fees",
            title: "About delivery fees",
        },
    ]

    return (

        <section className='w-[82%]'>

            <div className='bg-white p-8 text-sm'>

                <p className='py-3'>Takealot offers collection as an easy method to collect your order at your convenience : </p>

                <ul className='list-inside list-disc py-3'>
                    <li>Collect - You can choose to collect from a Takealot Pickup Point near you. </li>
                </ul>

                <p className='py-3'>Our picking, packing and delivery of your order to the Takealot Pickup point is linked to what you order, where you want it collected and how you choose to pay. So collection times may vary. Estimates are provided below to help you shop, but always check your order’s estimated collection Date during checkout for the most accurate delivery information.

                </p>

                {/* table - 1 with caption */}
                <h1 className='text-center font-bold text-md py-3'> Standard Collect </h1>

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
                                <td> Pickup Point : Cape Town, Johannesburg, Pretoria </td>
                                <td> 2-5 working days </td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td> Pickup Point : Regional Area </td>
                                <td> 2-6 working days </td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td> Pickup Point : Remote Area </td>
                                <td> 3-7 working days </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                {/* table - 2 with caption */}
                <h1 className='text-center font-bold text-md pt-8 pb-3'> Premium Collect Options * </h1>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className='bg-primary text-white text-sm'>
                                <th>Delivery Type</th>
                                <th>Collect Time </th>
                                <th>Cut Off Time </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>Same Day Collect</td>
                                <td>Same Day from 3pm</td>
                                <td>Pay before 10:00 a.m. Mon-Sat</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>Next Day Collect</td>
                                <td>Next Day from 10am	</td>
                                <td>Pay before 11:59pm previous day </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className='py-3'>Collection times vary, please wait for your Ready to Collect email before visiting the pickup point.</p>
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

export default AboutCollectionTimeFrames;