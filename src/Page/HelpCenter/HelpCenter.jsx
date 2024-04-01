import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { HiChevronRight, HiShoppingCart } from 'react-icons/hi2';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const HelpCenter = () => {

    const [topicCatalog, setTopicCatalog] = useState(false)
    return (
        <section className='lg:px-4'>
            <div className='hero px-4 h-[450px] rounded-b-lg' style={{ backgroundImage: "url(https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/help-centre/Header-Large@2x.png-868cd5e789ded2bf3855.png)" }}>

                {/*Top Nav */}
                <div className="drawer absolute top-0 lg:top-3 px-3 max-w-7xl mx-auto">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        {/* Navbar */}
                        <div className="w-full navbar">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-1 px-2">
                                <Link to="/"><img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/logo-invert.svg-97f9dff70e59ec07ae74.svg" alt="Logo Takealot" className='w-32' /></Link>
                                <div className="mx-4 h-5 border-s-2 border-white"></div>
                                <Link to="/help-centre" className='text-lg font-medium text-white'>Help Centre</Link>
                                <div className="lg:hidden absolute top-16 w-full border-t border-white left-0"></div>
                            </div>

                            <div className="flex-none hidden lg:block px-2">
                                <ul className="inline-flex items-center text-white text-sm">
                                    {/* Navbar menu content here */}
                                    <li className='inline-flex items-center gap-1 cursor-pointer pb-3' onMouseEnter={() => setTopicCatalog(true)} onMouseLeave={() => setTopicCatalog(false)}><span>All Help topic</span> <span><IoMdArrowDropdown className='h-4 w-4' /></span></li>
                                    <div className="mx-4 h-5 border-s border-white mb-3"></div>
                                    <li className='hover:border-b pb-3 '><Link to="/">Return to Shopping</Link></li>

                                    <div className={`z-50 px-4 py-5 bg-white absolute rounded-sm w-[260px] h-[264px] transition-all duration-500 ${topicCatalog ? "top-12  right-40" : "hidden"}`} onMouseEnter={() => setTopicCatalog(true)} onMouseLeave={() => setTopicCatalog(false)}>
                                        <div className='flex flex-col space-y-2'>
                                            <Link to="/help-centre/delivery" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Delivery</Link>
                                            <Link to="/help-centre/returns" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Returns</Link>
                                            <Link to="/help-centre/orders-cancellations" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Orders & Cancellations</Link>
                                            <Link to="/help-centre/collection" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Collection</Link>
                                            <Link to="/help-centre/refunds" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Refunds</Link>
                                            <Link to="/help-centre/payments-promos-gift-vouchers" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Payments, Promos & Gift Vouchers</Link>
                                            <Link to="/help-centre/product-stock" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Product & Stock</Link>
                                            <Link to="/help-centre/data-privacy" className='text-neutral hover:text-primary hover:border-b hover:border-b-primary w-fit transition-all duration-300'>Data & Privacy</Link>
                                        </div>
                                    </div>


                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="drawer-side z-50">
                        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu w-72 px-0 py-0 min-h-screen bg-[#f4f4f4] z-50">
                            <li className='w-full bg-white shadow px-2 py-2'>
                                <div className='flex flex-row gap-5'>
                                    <div className='w-full'><Link to="/"><img src="https://shopfront.takealot.com/b0fd31305b6ec6eb9e374f5e527a4ad540896d49/static/media/src/images/logo.svg-f6ccb489b85bbddf97d6.svg" alt="Logo Takealot" className='w-28' /></Link></div>
                                    <div className='w-full'>
                                        <Link to="/help-centre" className='w-full font-semibold'>Help Centre</Link>
                                    </div>
                                </div>

                            </li>


                            <li className='w-full bg-white shadow py-2 my-3 text-sm'>
                                <Link to="/help-centre" className='w-full'>Help Centre</Link>
                            </li>

                            <li className='w-full py-2 mb-3 text-sm'>
                                <span className='uppercase text-[#4d4d4f] font-semibold'>All Help Topics</span>
                            </li>


                            <ul className='space-y-2 px-0 border-none m-0 w-full bg-white shadow  py-2 mb-3 text-sm'>
                                <li className='border-b py-2'>
                                    <Link to="/help-centre/delivery" className='text-neutral'>Delivery</Link>
                                </li>
                                <li className='border-b py-2'>
                                    <Link to="/help-centre/returns" className='text-neutral'>Returns</Link>
                                </li>
                                <li className='border-b py-2'>
                                    <Link to="/help-centre/account/orders-cancellations" className='text-neutral'>Orders & Cancellations</Link>
                                </li>
                                <li className='border-b py-2'>
                                    <Link to="/help-centre/collection" className='text-neutral'>Collection</Link>
                                </li>
                                <li className='border-b py-2'>
                                    <Link to="/help-centre/refunds" className='text-neutral'>Refunds</Link>
                                </li>
                                <li className='border-b py-2'>
                                    <Link to="/help-centre/payments-promos-gift-vouchers" className='text-neutral'>Payments, Promos & Gift Vouchers</Link>
                                </li>
                                <li className='border-b py-2'>
                                    <Link to="/help-centre/product-stock" className='text-neutral'>Product & Stock</Link>
                                </li>
                                <li className='py-2'>
                                    <Link to="/help-centre/data-privacy" className='text-neutral'>Data & Privacy</Link>
                                </li>
                            </ul>

                            <li className='w-full bg-white shadow py-2 absolute bottom-2 text-sm'>
                                <Link to="/" className='inline-flex items-center gap-5'>
                                    <HiShoppingCart className='h-6 w-6 text-primary' /> <span className='text-base'>Return to shopping</span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>


                <div className='banner-section w-full mx-auto'>
                    <h1 className='text-3xl lg:text-4xl font-bold text-white text-center'>How can we help you?</h1>

                    <form className='input-field my-4 lg:w-[80%] mx-auto relative'>

                        <input type="text" placeholder='Search our Help Centre' className='py-4 px-3 rounded outline-none w-full' />

                        <input type="submit" value="Search" className='absolute right-3 top-[7px] px-6 py-2 border rounded border-primary bg-primary text-white' />


                    </form>

                    {/* large menu */}
                    <div className='grid grid-cols-3 lg:grid-cols-6 items-center gap-2 lg:w-[80%] mx-auto mt-5 lg:mt-8'>
                        <Link to="/account/orders" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>View Orders</Link>

                        <Link to="/takealot-pickup-points" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>Takealot Pickup Points</Link>

                        <Link to="/account/returns" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>Track My Return</Link>

                        <Link to="/account/credits" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>Credit & Refunds</Link>

                        <Link to="/return-policy-help/" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>Returns Policy</Link>

                        <Link to="/account/orders" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>Track Delivery</Link>
                    </div>


                </div>

            </div>

            {/* Popular Topics */}

            <div className='lg:px-4 my-10'>

                <h1 className='hidden lg:block text-[#4d4d4f] text-xl font-semibold mb-6'>
                    Popular Topics
                </h1>

                {/* Large style */}
                <div className='hidden lg:block w-full'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        // pagination={{
                        //   clickable: true,
                        // }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='w-[300px]'>
                            <Link to="/help-centre/account/orders-cancellations" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                <div className='w-full flex items-center gap-2'>
                                    <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__e21cd38f7bff0bd13c2f3cd965a3696f4fed75f5.png" alt="icon" className='w-5' />
                                    </div>

                                    <h1 className='text-sm font-medium'>Orders & Cancellations</h1>
                                </div>

                                <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                    How do I cancel an order?
                                </div>
                            </Link>
                        </SwiperSlide>


                        <SwiperSlide className='w-[300px]'>
                            <Link to="/help-centre/delivery" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
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
                            <Link to="/help-centre/returns" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                <div className='w-full flex items-center gap-2'>
                                    <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__affabfdc620808dbe89a48147eb8edfb71bc8486.png" alt="icon" className='w-5' />
                                    </div>

                                    <h1 className='text-sm font-medium'>Returns</h1>
                                </div>

                                <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                    Reschedule my return collection
                                </div>
                            </Link>
                        </SwiperSlide>



                        <SwiperSlide className='w-[300px]'>
                            <Link to="/help-centre/delivery" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
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
                            <Link to="/help-centre/refunds" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                <div className='w-full flex items-center gap-2'>
                                    <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__d61d99a83f753a99d72de8d47bb8e9e06c9b21c6.png" alt="icon" className='w-5' />
                                    </div>

                                    <h1 className='text-sm font-medium'>Refunds</h1>
                                </div>

                                <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                    How do I get a refund instead of a credit?
                                </div>
                            </Link>
                        </SwiperSlide>

                    </Swiper>
                </div>

                {/* Phone */}

                <div className='my-5 bg-white shadow lg:hidden'>

                    <ul className='space-y-2 px-3 py-4'>

                        <li className='border-b pb-2 text-[#4d4d4f] font-medium text-sm'>Popular Topics</li>


                        <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                            <Link to="/help-centre/account/orders-cancellations" className='w-full text-xs inline-flex items-center justify-between'>
                                <span>How do I cancel an order?</span> <span><HiChevronRight className='h-5 w-5' /></span>
                            </Link>
                        </li>


                        <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                            <Link to="/help-centre/delivery" className='w-full text-xs inline-flex items-center justify-between'>
                                <span>Track your order</span> <span><HiChevronRight className='h-5 w-5' /></span>
                            </Link>
                        </li>


                        <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                            <Link to="/help-centre/returns" className='w-full text-xs inline-flex items-center justify-between'>
                                <span>Reschedule my return collection</span> <span><HiChevronRight className='h-5 w-5' /></span>
                            </Link>
                        </li>


                        <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                            <Link to="/help-centre/delivery" className='w-full text-xs inline-flex items-center justify-between'>
                                <span>Split delivery requests</span> <span><HiChevronRight className='h-5 w-5' /></span>
                            </Link>
                        </li>


                        <li className='py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                            <Link to="/help-centre/refunds" className='w-full text-xs inline-flex items-center justify-between'>
                                <span>How do I get a refund instead of a credit?</span> <span><HiChevronRight className='h-5 w-5' /></span>
                            </Link>
                        </li>
                    </ul>

                </div>

            </div>

            {/*All Help Topics  */}

            <div className='lg:px-4 my-10'>

                {/*Large*/}
                <div className='hidden lg:block'>
                    <h1 className='text-[#4d4d4f] text-xl font-semibold mb-6'>
                        All Help Topics
                    </h1>

                    <div className='grid grid-cols-2 w-full gap-5'>

                        <Link to="/help-centre/delivery" className='w-full h-[260px] bg-white shadow p-5'>

                            <div className='w-full flex items-center justify-between pb-5 border-b'>
                                <div className='flex items-center gap-4'>
                                    <div className='px-3 py-3 bg-gray-200 rounded-lg'>
                                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__a74a26dd212b3806eab80d2441241e0d6cc629b9.png" alt="Icon" className='w-6' />
                                    </div>
                                    <p className='text-[#4d4d4f] text-xl font-semibold'>Delivery</p>
                                </div>
                                <div>
                                    <p className='text-[#4d4d4f9a]'><small>10 topics</small></p>
                                </div>
                            </div>

                            <div className='pt-5 flex flex-col space-y-3 text-sm'>
                                <Link to="/help-centre/delivery/order-track" className='hover:text-primary hover:underline'>Track your order</Link>
                                <Link to="/help-centre/delivery/reschedule-delivery" className='hover:text-primary hover:underline'>Reschedule your delivery</Link>
                                <Link to="/help-centre/delivery/change-address" className='hover:text-primary hover:underline'>Change your delivery address</Link>
                                <Link to="/help-centre/delivery" className='my-4 px-5 py-2 border border-primary w-fit bg-primary text-white rounded font-medium'>See All</Link>

                            </div>



                        </Link>


                        <Link to="/help-centre/returns" className='w-full h-[260px] bg-white shadow p-5'>

                            <div className='w-full flex items-center justify-between pb-5 border-b'>
                                <div className='flex items-center gap-4'>
                                    <div className='px-3 py-3 bg-gray-200 rounded-lg'>
                                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__affabfdc620808dbe89a48147eb8edfb71bc8486.png" alt="Icon" className='w-6' />
                                    </div>
                                    <p className='text-[#4d4d4f] text-xl font-semibold'>Returns</p>
                                </div>
                                <div>
                                    <p className='text-[#4d4d4f9a]'><small>13 topics</small></p>
                                </div>
                            </div>

                            <div className='pt-5 flex flex-col space-y-3 text-sm'>
                                <Link to="/help-centre/returns/return-product" className='hover:text-primary hover:underline'>Can I return my product?</Link>
                                <Link to="/help-centre/returns/reschedule-collection" className='hover:text-primary hover:underline'>Reschedule my return collection</Link>
                                <Link to="/help-centre/returns/return-status" className='hover:text-primary hover:underline'>Track my return status</Link>
                                <Link to="/help-centre/returns" className='my-4 px-5 py-2 border border-primary w-fit bg-primary text-white rounded font-medium'>See All</Link>

                            </div>



                        </Link>

                        <Link to="/help-centre/orders-cancellations" className='w-full h-[260px] bg-white shadow p-5'>

                            <div className='w-full flex items-center justify-between pb-5 border-b'>
                                <div className='flex items-center gap-4'>
                                    <div className='px-3 py-3 bg-gray-200 rounded-lg'>
                                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__e21cd38f7bff0bd13c2f3cd965a3696f4fed75f5.png" alt="Icon" className='w-6' />
                                    </div>
                                    <p className='text-[#4d4d4f] text-xl font-semibold'>Orders & Cancellations</p>
                                </div>
                                <div>
                                    <p className='text-[#4d4d4f9a]'><small>5 topics</small></p>
                                </div>
                            </div>

                            <div className='pt-5 flex flex-col space-y-3 text-sm'>
                                <Link to="/help-centre/account/orders-cancellations/cancel-order" className='hover:text-primary hover:underline'>How do I cancel an order?</Link>
                                <Link to="/help-centre/account/orders-cancellations/make-changes-after-placed" className='hover:text-primary hover:underline'>Can I make changes to my order after it has been placed?</Link>
                                <Link to="/help-centre/account/orders-cancellations/Why-cancelled-order" className='hover:text-primary hover:underline'>Why have you cancelled my order?</Link>
                                <Link to="/help-centre/account/orders-cancellations" className='my-4 px-5 py-2 border border-primary w-fit bg-primary text-white rounded font-medium'>See All</Link>

                            </div>



                        </Link>

                        <Link to="/help-centre/collection" className='w-full h-[260px] bg-white shadow p-5'>

                            <div className='w-full flex items-center justify-between pb-5 border-b'>
                                <div className='flex items-center gap-4'>
                                    <div className='px-3 py-3 bg-gray-200 rounded-lg'>
                                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__55a9e2e4e311872fc8b64a2871cf9e2725ac3bb4.png" alt="Icon" className='w-6' />
                                    </div>
                                    <p className='text-[#4d4d4f] text-xl font-semibold'>Collection</p>
                                </div>
                                <div>
                                    <p className='text-[#4d4d4f9a]'><small>6 topics</small></p>
                                </div>
                            </div>

                            <div className='pt-5 flex flex-col space-y-3 text-sm'>
                                <Link to="/help-centre/collection/about-collection" className='hover:text-primary hover:underline'>About collection options & time frames</Link>
                                <Link to="/help-centre/collection/about-collection-fees" className='hover:text-primary hover:underline'>About collection fees</Link>
                                <Link to="/help-centre/collection/Why-collection-available" className='hover:text-primary hover:underline'>Why is collection not available for my order?</Link>
                                <Link to="/help-centre/collection" className='my-4 px-5 py-2 border border-primary w-fit bg-primary text-white rounded font-medium'>See All</Link>

                            </div>



                        </Link>


                        <Link to="/help-centre/refunds" className='w-full h-[260px] bg-white shadow p-5'>

                            <div className='w-full flex items-center justify-between pb-5 border-b'>
                                <div className='flex items-center gap-4'>
                                    <div className='px-3 py-3 bg-gray-200 rounded-lg'>
                                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__d61d99a83f753a99d72de8d47bb8e9e06c9b21c6.png" alt="Icon" className='w-6' />
                                    </div>
                                    <p className='text-[#4d4d4f] text-xl font-semibold'>Refunds</p>
                                </div>
                                <div>
                                    <p className='text-[#4d4d4f9a]'><small>2 topics</small></p>
                                </div>
                            </div>

                            <div className='pt-5 flex flex-col space-y-3 text-sm relative h-full'>
                                <Link to="/help-centre/refunds/refunds-credit" className='hover:text-primary hover:underline'>How do I get a refund instead of a credit?</Link>
                                <Link to="/help-centre/refunds/refund-taking-long" className='hover:text-primary hover:underline'>Why is my refund taking so long?</Link>


                                <Link to="/help-centre/refunds" className='my-4 px-5 py-2 border border-primary w-fit bg-primary text-white rounded font-medium absolute bottom-16'>See All</Link>

                            </div>



                        </Link>


                        <Link to="/help-centre/payments-promos-gift-vouchers" className='w-full h-[260px] bg-white shadow p-5'>

                            <div className='w-full flex items-center justify-between pb-5 border-b'>
                                <div className='flex items-center gap-4'>
                                    <div className='px-3 py-3 bg-gray-200 rounded-lg'>
                                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__7339770cba87798856f927ef85ae2e8fa7c2d279.png" alt="Icon" className='w-6' />
                                    </div>
                                    <p className='text-[#4d4d4f] text-xl font-semibold'>Payments, Promos & Gift Vouchers</p>
                                </div>
                                <div>
                                    <p className='text-[#4d4d4f9a]'><small>15 topics</small></p>
                                </div>
                            </div>

                            <div className='pt-5 flex flex-col space-y-3 text-sm relative h-full'>
                                <Link to="/help-centre/payments-promos-gift-vouchers/available-payment-options" className='hover:text-primary hover:underline'>Available payment options</Link>
                                <Link to="/help-centre/payments-promos-gift-vouchers/price-item-change-checkout" className='hover:text-primary hover:underline'>Why does the price of my item change when I try and check out?</Link>
                                <Link to="/help-centre/payments-promos-gift-vouchers/havent-received-confirmation" className='hover:text-primary hover:underline'>Why haven’t I received my payment confirmation email?</Link>


                                <Link to="/help-centre/payments-promos-gift-vouchers" className='my-4 px-5 py-2 border border-primary w-fit bg-primary text-white rounded font-medium'>See All</Link>

                            </div>



                        </Link>


                        <Link to="/help-centre/product-stock" className='w-full h-[260px] bg-white shadow p-5'>

                            <div className='w-full flex items-center justify-between pb-5 border-b'>
                                <div className='flex items-center gap-4'>
                                    <div className='px-3 py-3 bg-gray-200 rounded-lg'>
                                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__1f1f54addf8751b42cd0fa4d63cde55a67a6c7d5.png" alt="Icon" className='w-6' />
                                    </div>
                                    <p className='text-[#4d4d4f] text-xl font-semibold'>Product & Stock</p>
                                </div>
                                <div>
                                    <p className='text-[#4d4d4f9a]'><small>10 topics</small></p>
                                </div>
                            </div>

                            <div className='pt-5 flex flex-col space-y-3 text-sm relative h-full'>
                                <Link to="/help-centre/product-stock/help-to-find-product" className='hover:text-primary hover:underline'>Can you help me find a product?</Link>
                                <Link to="/help-centre/product-stock/buy-products-sellers-Takealot" className='hover:text-primary hover:underline'>How do I buy products from sellers other than Takealot on the website?</Link>
                                <Link to="/help-centre/product-stock/give-information-product" className='hover:text-primary hover:underline'>Can you give me more information on a product?</Link>


                                <Link to="/help-centre/product-stock" className='my-4 px-5 py-2 border border-primary w-fit bg-primary text-white rounded font-medium'>See All</Link>

                            </div>



                        </Link>


                        <Link to="/help-centre/data-privacy" className='w-full h-[260px] bg-white shadow p-5'>

                            <div className='w-full flex items-center justify-between pb-5 border-b'>
                                <div className='flex items-center gap-4'>
                                    <div className='px-3 py-3 bg-gray-200 rounded-lg'>
                                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__22d8e2ac641292318ff89859e8baa89e2628c1be.png" alt="Icon" className='w-6' />
                                    </div>
                                    <p className='text-[#4d4d4f] text-xl font-semibold'>Data & Privacy</p>
                                </div>
                                <div>
                                    <p className='text-[#4d4d4f9a]'><small>18 topics</small></p>
                                </div>
                            </div>

                            <div className='pt-5 flex flex-col space-y-3 text-sm relative h-full'>
                                <Link to="/help-centre/data-privacy/register-to-takealot" className='hover:text-primary hover:underline'>How to register on takealot.com</Link>
                                <Link to="/help-centre/data-privacy/resetting-password" className='hover:text-primary hover:underline'>Changing or resetting your password</Link>
                                <Link to="/help-centre/data-privacy/profile-update-information" className='hover:text-primary hover:underline'>My email address has changed. How do I update this on my profile?</Link>


                                <Link to="/help-centre/data-privacy" className='my-4 px-5 py-2 border border-primary w-fit bg-primary text-white rounded font-medium'>See All</Link>

                            </div>



                        </Link>
                    </div>

                </div>

                {/* Phone */}

                <div className='my-5 bg-white shadow lg:hidden'>

                    <ul className='space-y-2 px-3 py-4'>

                        <li className='border-b pb-2 text-[#4d4d4f] font-medium text-sm'>All Help Topics</li>


                        <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                            <Link to="/help-centre/delivery" className='w-full text-xs inline-flex items-center justify-between'>
                                <div className='w-full flex items-center gap-3'>
                                    <div className='px-2 py-2 bg-gray-200 rounded-sm'>
                                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__a74a26dd212b3806eab80d2441241e0d6cc629b9.png" alt="Icon" className='w-4' />
                                    </div>
                                    <p className='text-[#4d4d4f] text-sm font-semibold'>Delivery</p>
                                </div>

                                <span><HiChevronRight className='h-5 w-5' /></span>
                            </Link>
                        </li>

                        <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                            <Link to="/help-centre/returns" className='w-full text-xs inline-flex items-center justify-between'>
                                <div className='w-full flex items-center gap-3'>
                                    <div className='px-2 py-2 bg-gray-200 rounded-sm'>
                                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__affabfdc620808dbe89a48147eb8edfb71bc8486.png" alt="Icon" className='w-4' />
                                    </div>
                                    <p className='text-[#4d4d4f] text-sm font-semibold'>Returns</p>
                                </div>

                                <span><HiChevronRight className='h-5 w-5' /></span>
                            </Link>
                        </li>



                        <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                            <Link to="/help-centre/account/orders-cancellations" className='w-full text-xs inline-flex items-center justify-between'>
                                <div className='w-full flex items-center gap-3'>
                                    <div className='px-2 py-2 bg-gray-200 rounded-sm'>
                                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__e21cd38f7bff0bd13c2f3cd965a3696f4fed75f5.png" alt="Icon" className='w-4' />
                                    </div>
                                    <p className='text-[#4d4d4f] text-sm font-semibold'>Orders & Cancellations</p>
                                </div>

                                <span><HiChevronRight className='h-5 w-5' /></span>
                            </Link>
                        </li>


                        <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                            <Link to="/help-centre/collection" className='w-full text-xs inline-flex items-center justify-between'>
                                <div className='w-full flex items-center gap-3'>
                                    <div className='px-2 py-2 bg-gray-200 rounded-sm'>
                                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__55a9e2e4e311872fc8b64a2871cf9e2725ac3bb4.png" alt="Icon" className='w-4' />
                                    </div>
                                    <p className='text-[#4d4d4f] text-sm font-semibold'>Collection</p>
                                </div>

                                <span><HiChevronRight className='h-5 w-5' /></span>
                            </Link>
                        </li>

                        <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                            <Link to="/help-centre/refunds" className='w-full text-xs inline-flex items-center justify-between'>
                                <div className='w-full flex items-center gap-3'>
                                    <div className='px-2 py-2 bg-gray-200 rounded-sm'>
                                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__d61d99a83f753a99d72de8d47bb8e9e06c9b21c6.png" alt="Icon" className='w-4' />
                                    </div>
                                    <p className='text-[#4d4d4f] text-sm font-semibold'>Refunds</p>
                                </div>

                                <span><HiChevronRight className='h-5 w-5' /></span>
                            </Link>
                        </li>


                        <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                            <Link to="/help-centre/payments-promos-gift-vouchers" className='w-full text-xs inline-flex items-center justify-between'>
                                <div className='w-full flex items-center gap-3'>
                                    <div className='px-2 py-2 bg-gray-200 rounded-sm'>
                                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__7339770cba87798856f927ef85ae2e8fa7c2d279.png" alt="Icon" className='w-4' />
                                    </div>
                                    <p className='text-[#4d4d4f] text-sm font-semibold'>Payments, Promos & Gift Vouchers</p>
                                </div>

                                <span><HiChevronRight className='h-5 w-5' /></span>
                            </Link>
                        </li>

                        <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                            <Link to="/help-centre/product-stock" className='w-full text-xs inline-flex items-center justify-between'>
                                <div className='w-full flex items-center gap-3'>
                                    <div className='px-2 py-2 bg-gray-200 rounded-sm'>
                                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__1f1f54addf8751b42cd0fa4d63cde55a67a6c7d5.png" alt="Icon" className='w-4' />
                                    </div>
                                    <p className='text-[#4d4d4f] text-sm font-semibold'>Product & Stock</p>
                                </div>

                                <span><HiChevronRight className='h-5 w-5' /></span>
                            </Link>
                        </li>

                        <li className='py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                            <Link to="/help-centre/data-privacy" className='w-full text-xs inline-flex items-center justify-between'>
                                <div className='w-full flex items-center gap-3'>
                                    <div className='px-2 py-2 bg-gray-200 rounded-sm'>
                                        <img src="https://media.takealot.com/help-cms/original_images/____CMS__22d8e2ac641292318ff89859e8baa89e2628c1be.png" alt="Icon" className='w-4' />
                                    </div>
                                    <p className='text-[#4d4d4f] text-sm font-semibold'>Data & Privacy</p>
                                </div>

                                <span><HiChevronRight className='h-5 w-5' /></span>
                            </Link>
                        </li>


                    </ul>

                </div>
            </div>

        </section>
    );
};

export default HelpCenter;