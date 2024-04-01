import React from 'react';
import { HiArrowSmallLeft, HiChevronRight } from 'react-icons/hi2';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../help.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { IoChevronForwardOutline } from 'react-icons/io5';

const DeliveryHelpHome = () => {
    return (
        <section className='lg:px-4'>

            <div className='hero h-60 rounded-b-lg relative' style={{ backgroundImage: "url(https://shopfront.takealot.com/b317a38ffe915f6034dfee91ccee142cabe5ca77/static/media/src/images/help-centre/Header-Large@2x.png-868cd5e789ded2bf3855.png)", backgroundRepeat: "no-repeat" }}>

                <div className="hidden lg:block text-xs breadcrumbs text-white absolute top-20 left-10">
                    <ul>
                        <li><Link to="/help-centre">Help Centre</Link></li>
                        <li><Link>Delivery</Link></li>
                    </ul>
                </div>

                <div className='lg:hidden text-xs text-white absolute top-20 left-5'>
                    <Link to="/help-centre" className='inline-flex items-center gap-1'><HiArrowSmallLeft className='h-5 w-5' /> Back to Help Centre</Link>
                </div>

                <div className='flex flex-col gap-4 lg:flex-row w-full items-start lg:items-center justify-between px-5 mt-28'>
                    <div className='flex items-center gap-2 lg:gap-5'>
                        <div className='px-3 py-3 bg-gray-200 rounded-lg'>
                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__a74a26dd212b3806eab80d2441241e0d6cc629b9.png" alt="Icon" className='w-4 lg:w-6' />
                        </div>
                        <p className='text-xl lg:text-3xl font-bold text-white'>Delivery</p>
                    </div>

                    <div>
                        <Link to="/account/orders" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>View Orders</Link>
                    </div>
                </div>


            </div>


            <div className='my-14'>

                <p className='text-xl font-semibold text-[#4d4d4f] mb-5 hidden lg:block'>Popular Delivery Topics</p>

                <div className=''>

                    {/* Large style */}
                    <div className='hidden lg:block w-full'>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={0}
                            // pagination={{
                            //   clickable: true,
                            // }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >


                            <SwiperSlide className='w-[300px]'>
                                <Link to="/help-centre/deliveryDetails/track-order" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                    <div className='w-full flex items-center gap-2'>
                                        <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__a74a26dd212b3806eab80d2441241e0d6cc629b9.png" alt="icon" className='w-5' />
                                        </div>

                                        <h1 className='text-sm font-medium'>Delivery</h1>
                                    </div>

                                    <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                        Track your order
                                    </div>
                                </Link>
                            </SwiperSlide>


                            <SwiperSlide className='w-[300px]'>
                                <Link to="/help-centre/deliveryDetails/reschedule-delivery" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                    <div className='w-full flex items-center gap-2'>
                                        <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__a74a26dd212b3806eab80d2441241e0d6cc629b9.png" alt="icon" className='w-5' />
                                        </div>

                                        <h1 className='text-sm font-medium'>Delivery</h1>
                                    </div>

                                    <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                        Reschedule your delivery
                                    </div>
                                </Link>
                            </SwiperSlide>



                            <SwiperSlide className='w-[300px]'>
                                <Link to="/help-centre/deliveryDetails/split-requests" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                    <div className='w-full flex items-center gap-2'>
                                        <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__a74a26dd212b3806eab80d2441241e0d6cc629b9.png" alt="icon" className='w-5' />
                                        </div>

                                        <h1 className='text-sm font-medium'>Delivery</h1>
                                    </div>

                                    <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                        Split delivery requests
                                    </div>
                                </Link>
                            </SwiperSlide>



                            <SwiperSlide className='w-[300px]'>
                                <Link to="/help-centre/deliveryDetails/next-business-delivery" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                    <div className='w-full flex items-center gap-2'>
                                        <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__a74a26dd212b3806eab80d2441241e0d6cc629b9.png" alt="icon" className='w-5' />
                                        </div>

                                        <h1 className='text-sm font-medium'>Delivery</h1>
                                    </div>

                                    <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                        Next business day delivery
                                    </div>
                                </Link>
                            </SwiperSlide>

                        </Swiper>
                    </div>

                    {/* Phone */}

                    <div className='-mt-16 bg-white shadow lg:hidden rounded-t-lg'>

                        <ul className='space-y-2 px-3 py-4'>

                            <li className='border-b pb-2 text-[#4d4d4f] font-medium text-sm'>Popular Topics</li>


                            <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                                <Link to="/help-centre/deliveryDetails/track-order" className='w-full text-xs inline-flex items-center justify-between'>
                                    <span>Track your order</span> <span><HiChevronRight className='h-5 w-5' /></span>
                                </Link>
                            </li>


                            <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                                <Link to="/help-centre/deliveryDetails/reschedule-delivery" className='w-full text-xs inline-flex items-center justify-between'>
                                    <span>Reschedule your delivery</span> <span><HiChevronRight className='h-5 w-5' /></span>
                                </Link>
                            </li>


                            <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                                <Link to="/help-centre/deliveryDetails/split-requests" className='w-full text-xs inline-flex items-center justify-between'>
                                    <span> Split delivery requests</span> <span><HiChevronRight className='h-5 w-5' /></span>
                                </Link>
                            </li>


                            <li className='py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                                <Link to="/help-centre/deliveryDetails/next-business-delivery" className='w-full text-xs inline-flex items-center justify-between'>
                                    <span>Next business day delivery</span> <span><HiChevronRight className='h-5 w-5' /></span>
                                </Link>
                            </li>
                        </ul>

                    </div>

                </div>

            </div>


            <div className='my-9 w-full'>

                <div className='flex items-start justify-between gap-8'>
                    <div className='w-full'>
                        <p className='text-xl font-semibold text-[#4d4d4f] mb-5 hidden lg:block'>Delivery Topics</p>
                        <div className='w-full bg-white py-8 shadow rounded px-6 flex flex-col gap-1 text-sm text-[#4d4d4f]'>

                            <p className='text-lg font-semibold text-[#4d4d4f] mb-5 lg:hidden'>Delivery Topics</p>

                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/deliveryDetails/track-order">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Track your order</span>
                                    <span className='hidden lg:block'>We will deliver your order by the Estimated Delivery Date provided in your Payment Confirmation or Order Placed email. You are able to track your order by logging into your account and selecting Track Order.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/deliveryDetails/reschedule-delivery">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Reschedule your delivery</span>
                                    <span className='hidden lg:block'>Rescheduling your delivery is easy if you follow the steps below to check if your order is eligible and you will not be available to receive the order.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/deliveryDetails/change-delivery-address">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Change your delivery address</span>
                                    <span className='hidden lg:block'>Changing your delivery address after placing an order is not possible. However, if you are not available to receive your order at your original delivery address, you are able to reschedule your delivery date here should your order be eligible by contacting us.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/deliveryDetails/about-delivery-options-time-frames">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>About delivery options & time frames</span>
                                    <span className='hidden lg:block'>Takealot offers two safe and convenient methods for receiving your order: Collection at a Takealot Pickup Point or delivery anywhere in South Africa. Shipping times depend on where you are, our product selection and your choice of delivery or collection options.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/deliveryDetails/next-business-delivery">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Next business day delivery</span>
                                    <span className='hidden lg:block'>On select orders, we may be able to change your order from delivery to collect. If you want to request a change from delivery to collect, please contact us.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/deliveryDetails/delivery-fees">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>About delivery fees</span>
                                    <span className='hidden lg:block'>We offer next business day delivery during checkout if all products in the order meet the following criteria ...</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/deliveryDetails/can-i-change-my-order-from-delivery-to-collect">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Can I change my order from delivery to collect?</span>
                                    <span className='hidden lg:block'>On select orders, we may be able to change your order from delivery to collect. If you want to request a change from delivery to collect, please contact us.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/deliveryDetails/split-requests">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Split delivery requests</span>
                                    <span className='hidden lg:block'>On selected orders, we may split your delivery or collection, allowing your in-stock items to arrive sooner. If you want to request a split delivery or collection at a Takealot pickup point, please contact us below.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/deliveryDetails/item-missing-or-incorrect-in-order-received">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Item missing or incorrect in order received</span>
                                    <span className='hidden lg:block'>If you have a missing or incorrect item in your order, please contact us within 7 days of your order being received.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/deliveryDetails/international-shipping-delivery">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>International shipping & delivery</span>
                                    <span className='hidden lg:block'>We do not ship outside of South African borders at this time. However, we will ship UNISA prescribed textbooks internationally. Please contact us for more information.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>

                        </div>

{/* contact  */}
                        <div className='w-full bg-white shadow rounded p-4 my-10'>
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




                    </div>

                    <div className='w-1/3 bg-white shadow hidden lg:block text-sm'>
                        <p className='p-3 text-base font-medium text-[#000]'>All Help Topics</p>
                        <div className='border-b border-[#dadada]'></div>

                        <div className='my-3 flex flex-col gap-2'>
                            <NavLink to="/help-centre/delivery" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary")}>Delivery</NavLink>


                            <NavLink to="/help-centre/returns" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 = rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Returns</NavLink>


                            <NavLink to="/help-centre/orders-cancellations" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Orders & Cancellations</NavLink>


                            <NavLink to="/help-centre/collection" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Collections</NavLink>


                            <NavLink to="/help-centre/refunds" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Refunds</NavLink>


                            <NavLink to="/help-centre/payments-promos-gift-vouchers" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Payments,Promos & Gift Vouchers</NavLink>


                            <NavLink to="/help-centre/product-stock" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Product & Stock</NavLink>


                            <NavLink to="/help-centre/data-privacy" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2 rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Data & Privacy</NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DeliveryHelpHome;