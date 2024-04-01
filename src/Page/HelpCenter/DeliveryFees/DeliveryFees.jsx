import React from 'react';
import { Link } from 'react-router-dom';

const DeliveryFees = () => {
    return (
        <section className='w-[82%]'>

            <div className='bg-white p-8 text-sm'>
                <p> Standard delivery is FREE for orders totalling R500 or more. You can view all our delivery options below to find out how much it costs and also about premium options for a speedier delivery. </p>

                <p className='py-6'> Heavy / Bulky goods are delivered by a two-man team from the Takealot Delivery Team or one of our third-party couriers at a R200 surcharge per item. </p>


                {/* table  */}
                <h1 className='text-center font-bold text-md py-3'> Delivery Options </h1>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className='bg-primary text-white text-sm'>
                                <th>Delivery type</th>
                                <th>Delivery Charge</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>Standard Delivery (orders R500 or more)</td>
                                <td> FREE </td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>Standard Delivery (orders below R500)	</td>
                                <td> R70 </td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td>Same Day Delivery</td>
                                <td>R95</td>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <td>Saturday Delivery * (orders R500 or more)</td>
                                <td>FREE</td>
                            </tr>
                            {/* row 5 */}
                            <tr>
                                <td>Saturday Delivery * (orders below R500)</td>
                                <td>R70</td>
                            </tr>
                            {/* row 6 */}
                            <tr>
                                <td>Sunday Delivery * (orders R500 or more)</td>
                                <td>FREE</td>
                            </tr>
                            {/* row 7 */}
                            <tr>
                                <td>Sunday Delivery * (orders below R500)</td>
                                <td>R75</td>
                            </tr>
                            {/* row 8 */}
                            <tr>
                                <td>Delivery Surcharge (Heavy / Bulky Goods) *</td>
                                <td>R200 per item</td>
                            </tr>
                            {/* row 9 */}
                            <tr>
                                <td>Next Business Day Delivery * ( orders R500 or more)</td>
                                <td>R75</td>
                            </tr>
                            {/* row 10 */}
                            <tr>
                                <td>Next Business Day Delivery * ( orders below R500)</td>
                                <td>R90</td>
                            </tr>
                    

                        </tbody>
                    </table>
                </div>

            </div>

               {/* contact */}

               <div className='w-full bg-white shadow rounded p-4 my-14'>
                    <div className='w-full bg-primary bg-opacity-10 py-5 flex items-center gap-10'>
                        <div>
                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__d0da6dca9d77bd5c950880ccb158ac07bcea8752.png" alt="" className='w-32' />
                        </div>

                        <div className='w-full flex flex-col gap-2 lg:flex-row items-center'>
                            <div className='flex-1'>
                                <p className='text-lg font-semibold'>Didn't find what you need?</p>
                            </div>

                            <div className='mr-5'>
                                <button className='text-sm py-2 px-7 border border-primary bg-primary rounded text-white font-semibold'>Contact Us</button>
                            </div>
                        </div>

                    </div>
                </div>


                <h1 className='my-10 font-bold text-2xl'> Related Topics </h1>

                {/* accordion part */}

                <div className="join join-vertical w-full bg-white">
                    <div className="collapse collapse-arrow join-item border py-3">
                        <input type="radio" name="my-accordion-4" />
                        
                        <Link 
                        to="/help-centre/deliveryDetails/about-delivery-options-time-frames"
                        className="collapse-title text-lg font-medium hover:underline hover:text-blue-500">
                        About delivery options & time frames
                        </Link>
                    </div>
                    <div className="collapse collapse-arrow join-item border py-3">
                        <input type="radio" name="my-accordion-4" />
                        
                        <Link 
                        to="/help-centre/deliveryDetails/track-order"
                        className="collapse-title text-lg font-medium hover:underline hover:text-blue-500">
                           Track your order
                        </Link>
                    </div>
                </div>

        </section>
    );
};

export default DeliveryFees;