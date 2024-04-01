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

const CollectionHelp = () => {
    return (
        <section className='lg:px-4'>
            <div className='hero h-60 rounded-b-lg relative' style={{ backgroundImage: "url(https://shopfront.takealot.com/b317a38ffe915f6034dfee91ccee142cabe5ca77/static/media/src/images/help-centre/Header-Large@2x.png-868cd5e789ded2bf3855.png)", backgroundRepeat: "no-repeat" }}>

                <div className="hidden lg:block text-xs breadcrumbs text-white absolute top-20 left-10 ">
                    <ul>
                        <li><Link to="/help-centre">Help Centre</Link></li>
                        <li><Link>
                            Collection
                        </Link></li>
                    </ul>
                </div>

                <div className='lg:hidden text-xs text-white absolute top-20 left-5'>
                    <Link to="/help-centre" className='inline-flex items-center gap-1'><HiArrowSmallLeft className='h-5 w-5' /> Back to Help Centre</Link>
                </div>

                <div className='flex flex-col gap-4 lg:flex-row w-full items-start lg:items-center justify-between px-5 mt-28'>
                    <div className='flex items-center gap-2 lg:gap-5'>
                        <div className='px-3 py-3 bg-gray-200 rounded-lg'>
                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__55a9e2e4e311872fc8b64a2871cf9e2725ac3bb4.png" alt="Icon" className='w-4 lg:w-6' />
                        </div>
                        <p className='text-xl lg:text-3xl font-bold text-white'>
                            Collection
                        </p>
                    </div>

                    <div className='flex  items-center gap-2'>
                        <Link to="/account/orders" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>View Orders</Link>
                        <Link to="/takealot-pickup-points" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>Pickup Points</Link>
                    </div>
                </div>


            </div>


            <div className='my-14'>

                <p className='text-xl font-semibold text-[#4d4d4f] mb-5 hidden lg:block'>Popular Collection Topics</p>

                <div className=''>


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
                                <Link to="/help-centre/collectionDetails/about-collection-options-time-frames" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                    <div className='w-full flex items-center gap-2'>
                                        <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__55a9e2e4e311872fc8b64a2871cf9e2725ac3bb4.png" alt="icon" className='w-5' />
                                        </div>

                                        <h1 className='text-sm font-medium'>Collection</h1>
                                    </div>

                                    <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                        About collection options & time frames
                                    </div>
                                </Link>
                            </SwiperSlide>



                            <SwiperSlide className='w-[300px]'>
                                <Link to="/help-centre/collectionDetails/track-my-collection-order" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                    <div className='w-full flex items-center gap-2'>
                                        <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__55a9e2e4e311872fc8b64a2871cf9e2725ac3bb4.png" alt="icon" className='w-5' />
                                        </div>

                                        <h1 className='text-sm font-medium'>Collection</h1>
                                    </div>

                                    <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                        Track my collection order
                                    </div>
                                </Link>
                            </SwiperSlide>


                            <SwiperSlide className='w-[300px]'>
                                <Link to="/help-centre/collectionDetails/collecting-order" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
                                    <div className='w-full flex items-center gap-2'>
                                        <div className='bg-gray-200 px-2 py-2 rounded-md'>
                                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__55a9e2e4e311872fc8b64a2871cf9e2725ac3bb4.png" alt="icon" className='w-5' />
                                        </div>

                                        <h1 className='text-sm font-medium'>Collection</h1>
                                    </div>

                                    <div className='my-5 font-bold text-lg text-[#4d4d4f]'>
                                        Collecting your order
                                    </div>
                                </Link>
                            </SwiperSlide>




                        </Swiper>
                    </div>



                    <div className='-mt-16 bg-white shadow lg:hidden rounded-t-lg'>

                        <ul className='space-y-2 px-3 py-4'>

                            <li className='border-b pb-2 text-[#4d4d4f] font-medium text-sm'>Popular Topics</li>


                            <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                                <Link to="/help-centre/collectionDetails/about-collection-options-time-frames" className='w-full text-xs inline-flex items-center justify-between'>
                                    <span> About collection options & time frames</span> <span><HiChevronRight className='h-5 w-5' /></span>
                                </Link>
                            </li>

                            <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                                <Link to="/help-centre/collectionDetails/track-my-collection-order" className='w-full text-xs inline-flex items-center justify-between'>
                                    <span> Track my collection order</span> <span><HiChevronRight className='h-5 w-5' /></span>
                                </Link>
                            </li>

                            <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                                <Link to="/help-centre/collectionDetails/collecting-order" className='w-full text-xs inline-flex items-center justify-between'>
                                    <span> Collecting your order</span> <span><HiChevronRight className='h-5 w-5' /></span>
                                </Link>
                            </li>


                        </ul>

                    </div>

                </div>

            </div>



            <div className='my-9 w-full'>

                <div className='flex items-start justify-between gap-8'>
                    <div className='w-full'>
                        <p className='text-xl font-semibold text-[#4d4d4f] mb-5 hidden lg:block'>Collection Topics</p>
                        <div className='w-full bg-white py-8 shadow rounded px-6 flex flex-col gap-1 text-sm text-[#4d4d4f]'>

                            <p className='text-lg font-semibold text-[#4d4d4f] mb-5 lg:hidden'>Collection Topics</p>

                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/collectionDetails/about-collection-options-time-frames">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>About collection options & time frames</span>
                                    <span className='hidden lg:block'>Takealot offers collection at a Takealot Pickup Point anywhere in South Africa. Estimated collection dates depend on where you are, our product selection and your choice of collection options.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/collectionDetails/about-collection-fees">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>About collection fees</span>
                                    <span className='hidden lg:block'>Takealot offers Standard Collection free for orders totalling R500 or more. We also offer more collection options such as premium same day or next day collect at a cost available if you are in one of our Main centres (Cape Town, Kwa-Zulu Natal, Johannesburg & Pretoria)</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/collectionDetails/why-collection-not-available">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Why is collection not available for my order?</span>
                                    <span className='hidden lg:block'>Certain items are not available for collection due to the size or weight and may need to be delivered to your home or business address.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/collectionDetails/change-delivery-method">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Changing my delivery method or selected Takealot pickup point</span>
                                    <span className='hidden lg:block'>On select orders, we may be able to change your order from collect to delivery. If you want to request a change from  collect to delivery, please contact us.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/collectionDetails/track-my-collection-order">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Track my collection order</span>
                                    <span className='hidden lg:block'>We will notify when your order is ready for collection based on the estimated collection date provided when we confirm your payment. You are able to track your order by logging into your account and selecting Track Order.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>


                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/collectionDetails/collecting-order">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Collecting your order</span>
                                    <span className='hidden lg:block'>When you receive your ready for collection email, we provide you with a QR code and instructions on where your QR code can be found to receive your order at a Takealot Pickup Point within 7 days.</span>
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

export default CollectionHelp;