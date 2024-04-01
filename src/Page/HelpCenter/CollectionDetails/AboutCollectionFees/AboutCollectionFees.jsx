import React from 'react';
import SubContact from '../../../../components/SubContact/SubContact';

const AboutCollectionFees = () => {
    return (
        <section className='w-[82%]'>

            <div className='bg-white text-sm p-8'>
                <p className='py-4'>Standard Collection is FREE for orders totalling R500 or more. You can view all our Collect options below to find out how much it costs and premium options available for a faster collection.

                </p>

                {/* table - 1 with caption */}
                <h1 className='text-center font-bold text-md py-3'> Collect Options  </h1>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className='bg-primary text-white text-sm'>
                                <th>Collect Type </th>
                                <th>Collect Charge </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td> Standard Collect (orders R500 or more)	 </td>
                                <td> FREE </td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td> Standard Collect (orders below R500)	 </td>
                                <td> R30 </td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td> Same Day Collect * ( orders R500 or more)	 </td>
                                <td> R50 </td>
                            </tr>
                            <tr>
                                <td> Next Day Collect * ( orders R500 or more)		 </td>
                                <td> FREE </td>
                            </tr>
                            <tr>
                                <td> Next Day Collect * ( orders below R500)		 </td>
                                <td> R35 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className='pb-4 italic'> *Premium Collect only available in Main Centres (Cape Town, Kwa-Zulu Natal, Johannesburg & Pretoria)
                </p>


                {/* table - 2 with caption */}
                <h1 className='text-center font-bold text-md pt-8 pb-3'> Midrand (N1 Bridge) & Richmond Park Pickup Point
                </h1>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className='bg-primary text-white text-sm'>
                                <th>Collect Type	</th>
                                <th>Collect Charge </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>Standard Collect 	</td>
                                <td>FREE</td>

                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>Same Day Collect	</td>
                                <td>FREE	</td>

                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td>Next Day Collect </td>
                                <td>FREE	</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <h1 className='font-bold py-2'>Why do I need to pay a collection fee?
                </h1>
                <p className='py-3'>We’re committed to making your collection from a Takealot Pickup Point as seamless as possible. However, the journey of your order to a Pickup Point may incur certain costs for Takealot, such as the cost of moving the orders from our warehouse to your chosen Pickup Point. </p>


                <p className='py-3'>Instead of incorporating these costs into the price of the items you buy, we’ve opted for transparency. We apply these costs as a collection fee only for orders below a certain value. This approach allows us to consistently offer you the best prices on our products while helping us operate more efficiently.</p>
            </div>



            {/* contact */}
            <SubContact></SubContact>

        </section>
    );
};

export default AboutCollectionFees;