import React from 'react';
import { HiArrowSmallLeft, HiChevronRight } from 'react-icons/hi2';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { IoChevronForwardOutline } from 'react-icons/io5';

const ReturnHelp = () => {
    return (
        <section className='lg:px-4'>
            <div className='hero h-60 rounded-b-lg relative' style={{ backgroundImage: "url(https://shopfront.takealot.com/b317a38ffe915f6034dfee91ccee142cabe5ca77/static/media/src/images/help-centre/Header-Large@2x.png-868cd5e789ded2bf3855.png)", backgroundRepeat: "no-repeat" }}>

                <div className="hidden lg:block text-xs breadcrumbs text-white absolute top-20 left-10">
                    <ul>
                        <li><Link to="/help-centre">Help Centre</Link></li>
                        <li><Link>Returns</Link></li>
                    </ul>
                </div>

                <div className='lg:hidden text-xs text-white absolute top-20 left-5'>
                    <Link to="/help-centre" className='inline-flex items-center gap-1'><HiArrowSmallLeft className='h-5 w-5' /> Back to Help Centre</Link>
                </div>

                <div className='flex flex-col gap-4 lg:flex-row w-full items-start lg:items-center justify-between px-5 mt-28'>
                    <div className='flex items-center gap-2 lg:gap-5'>
                        <div className='px-3 py-3 bg-gray-200 rounded-lg'>
                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__affabfdc620808dbe89a48147eb8edfb71bc8486.png" alt="Icon" className='w-4 lg:w-6' />
                        </div>
                        <p className='text-xl lg:text-3xl font-bold text-white'>Returns </p>
                    </div>

                    <div className='flex  items-center gap-2'>
                        <Link to="/account/returns" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>Track Returns</Link>
                        <Link to="/return-policy-help/" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>Return Policy</Link>
                        <Link to="/account/credits" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>Credit & Refunds</Link>
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
                                <Link to="/help-centre/returnDetails/can-i-return-my-product" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                    <div className='w-full flex items-center gap-2'>
                                        <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__affabfdc620808dbe89a48147eb8edfb71bc8486.png" alt="icon" className='w-5' />
                                        </div>

                                        <h1 className='text-sm font-medium'>Returns</h1>
                                    </div>

                                    <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                        Can I return my product?
                                    </div>
                                </Link>
                            </SwiperSlide>


                            <SwiperSlide className='w-[300px]'>
                                <Link to="/help-centre/returnDetails/track-my-return-status" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                    <div className='w-full flex items-center gap-2'>
                                        <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__affabfdc620808dbe89a48147eb8edfb71bc8486.png" alt="icon" className='w-5' />
                                        </div>

                                        <h1 className='text-sm font-medium'>Returns</h1>
                                    </div>

                                    <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                        Track my return status
                                    </div>
                                </Link>
                            </SwiperSlide>


                            <SwiperSlide className='w-[300px]'>
                                <Link to="/help-centre/returnDetails/find-return-policy" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                    <div className='w-full flex items-center gap-2'>
                                        <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__affabfdc620808dbe89a48147eb8edfb71bc8486.png" alt="icon" className='w-5' />
                                        </div>

                                        <h1 className='text-sm font-medium'>Returns</h1>
                                    </div>

                                    <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                        Where can I find your returns policy?
                                    </div>
                                </Link>
                            </SwiperSlide>


                            <SwiperSlide className='w-[300px]'>
                                <Link to="/help-centre/returnDetails/return-my-product" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                    <div className='w-full flex items-center gap-2'>
                                        <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__affabfdc620808dbe89a48147eb8edfb71bc8486.png" alt="icon" className='w-5' />
                                        </div>

                                        <h1 className='text-sm font-medium'>Returns</h1>
                                    </div>

                                    <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                        How do I return my product?
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
                                <Link to="/help-centre/returnDetails/can-i-return-my-product" className='w-full text-xs inline-flex items-center justify-between'>
                                    <span> Can I return my product?</span> <span><HiChevronRight className='h-5 w-5' /></span>
                                </Link>
                            </li>

                            <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                                <Link to="/help-centre/returns/track-my-return-status" className='w-full text-xs inline-flex items-center justify-between'>
                                    <span>Track my return status</span> <span><HiChevronRight className='h-5 w-5' /></span>
                                </Link>
                            </li>

                            <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                                <Link to="/help-centre/returnDetails/find-returns-policy" className='w-full text-xs inline-flex items-center justify-between'>
                                    <span> Where can I find your returns policy?</span> <span><HiChevronRight className='h-5 w-5' /></span>
                                </Link>
                            </li>

                            <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                                <Link to="/help-centre/returnDetails/return-my-product" className='w-full text-xs inline-flex items-center justify-between'>
                                    <span>  How do I return my product?</span> <span><HiChevronRight className='h-5 w-5' /></span>
                                </Link>
                            </li>


                        </ul>

                    </div>

                </div>

            </div>


            <div className='my-9 w-full'>

                <div className='flex items-start justify-between gap-8'>
                    <div className='w-full'>
                        <p className='text-xl font-semibold text-[#4d4d4f] mb-5 hidden lg:block'>Returns Topics</p>
                        <div className='w-full bg-white py-8 shadow rounded px-6 flex flex-col gap-1 text-sm text-[#4d4d4f]'>

                            <p className='text-lg font-semibold text-[#4d4d4f] mb-5 lg:hidden'>Returns Topics</p>

                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/returnDetails/can-i-return-my-product">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Can I return my product?</span>
                                    <span className='hidden lg:block'>Check whether your return is eligible on your Returns page or find out more about unwanted products, product packaging for returns or non returnable products.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/returnDetails/reschedule-collection">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Reschedule my return collection</span>
                                    <span className='hidden lg:block'>Go to your Returns Page and follow the easy steps below to reschedule your return.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/returnDetails/track-my-return-status">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Track my return status</span>
                                    <span className='hidden lg:block'>We send you status updates via email or you can Track your Return Status on the Returns page by going to My account and Selecting Returns.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/returnDetails/return-my-product">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>How do I return my product?</span>
                                    <span className='hidden lg:block'>Go to your Returns Page and follow the easy steps below to log a return request.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/returnDetails/return-method-fees">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>All about return methods & fees</span>
                                    <span className='hidden lg:block'>Takealot offers hassle-free returns and does not charge any return administration fees. We will collect the item from you free of charge, or you may drop off the item at a Takealot Pickup Point after logging a return.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/returnDetails/cancel-my-return">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Cancel my return</span>
                                    <span className='hidden lg:block'>Takealot offers hassle-free returns and does not charge any return administration fees. We will collect the item from you free of charge, or you may drop off the item at a Takealot Pickup Point after logging a return.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/returnDetails/exchange-or-replace-product">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Can I exchange or replace a product?</span>
                                    <span className='hidden lg:block'>We offer exchanges for size and colour variations within 30 days of delivery or collection. If the product you selected is damaged or defective you may request to replace the product within the product warranty as listed on the product page.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/returnDetails/can-i-change-my-collection-address-once-i-have-logged-a-return">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Can I change my collection address once I have logged a return?</span>
                                    <span className='hidden lg:block'>When your return has been logged changing your collection address is not possible.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/returnDetails/returning-a-product-without-accessories-or-its-partner-product">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Returning a product without accessories or its partner product</span>
                                    <span className='hidden lg:block'>The complete product, including all its accessories has to be returned as we may need to replace the entire product.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/returnDetails/how-do-i-return-a-manufacturer-warranty-product">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>How do I return a manufacturer warranty product?</span>
                                    <span className='hidden lg:block'>A Manufacturer Warranty product is an item whereby the relevant supplier or manufacturer chooses to manage defective products after 7 days. Returns for any other reason will be facilitated by Takealot within 30 days.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/returnDetails/the-product-i-received-is-not-what-i-ordered">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>The product I received is not what I ordered</span>
                                    <span className='hidden lg:block'>If we accidentally delivered the wrong product to you, or if the product is not as described on the website , you have 30 days to log a return request by following the steps below by choosing your preferred outcome.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/returnDetails/how-soon-will-i-get-a-refund-or-credit-on-my-return">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>How soon will I get a refund or credit on my return?</span>
                                    <span className='hidden lg:block'>A refund will be processed after your item has been received and evaluated, the processing time is based on your original order's payment method.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/returnDetails/find-return-policy">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Where can I find your returns policy?</span>
                                    <span className='hidden lg:block'>Our Returns Policy can be found here ...</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>

                        </div>


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
                            <NavLink to="/help-centre/delivery" className={({ isActive }) => (isActive ? "bg-primary w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-primary text-primary" : "bg-transparent hover:bg-gray-100 w-[90%] pl-3 py-2  rounded-r-full bg-opacity-10 border-l-4 border-transparent")}>Delivery</NavLink>


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

export default ReturnHelp;