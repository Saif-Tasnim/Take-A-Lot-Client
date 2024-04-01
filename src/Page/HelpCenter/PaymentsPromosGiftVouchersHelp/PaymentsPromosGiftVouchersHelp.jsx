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
const PaymentsPromosGiftVouchersHelp = () => {
    return (
        <section className='lg:px-4'>
            <div className='hero h-60 rounded-b-lg relative' style={{ backgroundImage: "url(https://shopfront.takealot.com/b317a38ffe915f6034dfee91ccee142cabe5ca77/static/media/src/images/help-centre/Header-Large@2x.png-868cd5e789ded2bf3855.png)", backgroundRepeat: "no-repeat" }}>

                <div className="hidden lg:block text-xs breadcrumbs text-white absolute top-20 left-10">
                    <ul>
                        <li><Link to="/help-centre">Help Centre</Link></li>
                        <li><Link>
                            Payments, Promos & Gift Vouchers

                        </Link></li>
                    </ul>
                </div>

                <div className='lg:hidden text-xs text-white absolute top-20 left-5'>
                    <Link to="/help-centre" className='inline-flex items-center gap-1'><HiArrowSmallLeft className='h-5 w-5' /> Back to Help Centre</Link>
                </div>

                <div className='flex flex-col gap-4 lg:flex-row w-full items-start lg:items-center justify-between px-5 mt-28'>
                    <div className='flex items-center gap-2 lg:gap-5'>
                        <div className='px-3 py-3 bg-gray-200 rounded-lg'>
                            <img src="https://media.takealot.com/help-cms/original_images/____CMS__7339770cba87798856f927ef85ae2e8fa7c2d279.png" alt="Icon" className='w-4 lg:w-6' />
                        </div>
                        <p className='text-xl lg:text-3xl font-bold text-white'>
                            Payments, Promos & Gift Vouchers
                        </p>
                    </div>

                    <div className='flex  items-center gap-2'>

                        <Link to="/account/credit" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>Credit & Refunds</Link>
                        {/* <Link to="/account/returns" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>Track Returns</Link>
                        <Link to="/account/orders" className='text-xs font-light px-3 py-2 rounded-2xl text-white border border-white hover:bg-white hover:text-primary transition-all duration-500 text-center'>View Orders</Link> */}
                    </div>
                </div>


            </div>


            {/* <div className='my-14'>

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
                            <Link to="/help-centre/collection/collection-options-&-time-frames" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
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
                            <Link to="/help-centre/collection/track-collection-order" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
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
                            <Link to="/help-centre/collection/collecting-order" className='w-[300px] h-[160px] overflow-visible flex flex-col gap-2 bg-white shadow hover:shadow-xl hover:border-b-4 hover:border-b-primary transition-all duration-300 px-4 py-6'>
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
                            <Link to="/help-centre/delivery/track-order" className='w-full text-xs inline-flex items-center justify-between'>
                                <span>Track your order</span> <span><HiChevronRight className='h-5 w-5' /></span>
                            </Link>
                        </li>


                        <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                            <Link to="/help-centre/delivery/reschedule-delivery" className='w-full text-xs inline-flex items-center justify-between'>
                                <span>Reschedule your delivery</span> <span><HiChevronRight className='h-5 w-5' /></span>
                            </Link>
                        </li>


                        <li className='border-b py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                            <Link to="/help-centre/delivery/split-requests" className='w-full text-xs inline-flex items-center justify-between'>
                                <span> Split delivery requests</span> <span><HiChevronRight className='h-5 w-5' /></span>
                            </Link>
                        </li>


                        <li className='py-2 text-[#4d4d4f] font-medium text-sm w-full'>
                            <Link to="/help-centre/delivery/next-business-delivery" className='w-full text-xs inline-flex items-center justify-between'>
                                <span>Next business day delivery</span> <span><HiChevronRight className='h-5 w-5' /></span>
                            </Link>
                        </li>
                    </ul>

                </div>

            </div>

        </div>
         */}


            <div className='my-9 w-full'>

                <div className='flex items-start justify-between gap-8'>
                    <div className='w-full'>
                        <p className='text-xl font-semibold text-[#4d4d4f] mb-5 hidden lg:block'>Payments, Promos & Gift Vouchers Topics</p>
                        <div className='w-full bg-white py-8 shadow rounded px-6 flex flex-col gap-1 text-sm text-[#4d4d4f]'>

                            <p className='text-lg font-semibold text-[#4d4d4f] mb-5 lg:hidden'>Payments, Promos & Gift Vouchers Topics</p>

                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/payments-promos-gift-vouchers-details/available-payment-options">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Available payment options</span>
                                    <span className='hidden lg:block'>We have various safe and easy payment options available to you. During your checkout, we will offer available payment options on the payment page. See below to find out what options are available.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>
                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/payments-promos-gift-vouchers-details/price-item-change-checkout">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Why does the price of my item change when I try and check out?</span>
                                    <span className='hidden lg:block'>Promotional deals and discounts may be available for a limited time only or while stocks lasts. Prices are only secured through payment and is not reserved by adding to your cart.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>
                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/payments-promos-gift-vouchers-details/havent-received-confirmation">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>Why haven’t I received my payment confirmation email?</span>
                                    <span className='hidden lg:block'>Your payment confirmation email will be sent after your payment has been received. To check if your order and payment has been processed successfully, see the details below.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>
                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/payments-promos-gift-vouchers-details/all-about-coupon-codes-discounts">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>All about coupon codes & discounts</span>
                                    <span className='hidden lg:block'>Coupons are discounts offered and can be a fixed amount or a percentage discount offered on certain products or promotions. To find out more, read below.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>
                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/payments-promos-gift-vouchers-details/all-about-gift-vouchers">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>All about Gift Vouchers</span>
                                    <span className='hidden lg:block'>A great option as a gift for birthdays and special occasions. Find out more on how easy it is to redeem and how long it will be valid for use.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>
                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/payments-promos-gift-vouchers-details/all-about-payflex">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>All about Payflex</span>
                                    <span className='hidden lg:block'>Payflex is an interest-free payment option that allows you to pay for your order on Takealot and pay 25% per instalment. To find out how it works read more below.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>
                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/payments-promos-gift-vouchers-details/all-about-credit-debit-card">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>All about Credit / Debit Card Payments</span>
                                    <span className='hidden lg:block'>Pay for your order using your credit, debit or cheque cards. Find out how it works ...</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>
                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/payments-promos-gift-vouchers-details/all-about-cash-on-delivery">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>All about Cash on Delivery ( COD )</span>
                                    <span className='hidden lg:block'>Cash on Delivery is offered on select orders. Read below to find out if your order will be eligible and how it works.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>
                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/payments-promos-gift-vouchers-details/all-about-instant-eFT-ozow">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>All about Instant EFT with Ozow</span>
                                    <span className='hidden lg:block'>Ozow is an Instant EFT payment method which allows you to pay directly from your bank account. Find out more on how it works and the benefits.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>
                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/payments-promos-gift-vouchers-details/all-about-instant-EFT-payFast">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>All about Instant EFT with PayFast</span>
                                    <span className='hidden lg:block'>PayFast is an instant EFT payment method offered by PayFast. It allows you to pay directly from your bank account. Find out more about how it works.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>
                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/payments-promos-gift-vouchers-details/all-about-mobicred">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>All about Mobicred</span>
                                    <span className='hidden lg:block'>Mobicred is a simple, revolving credit facility. Shop on Takealot and repay your order in monthly instalments  over 12 months. Read below to find out about the fees and interest rates.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>
                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/payments-promos-gift-vouchers-details/all-about-eBucks">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>All about eBucks</span>
                                    <span className='hidden lg:block'>Shop and pay using the eBucks you earned from your FNB or RMB card. Find out how to earn eBucks while you shop on Takealot ...</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>
                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/payments-promos-gift-vouchers-details/all-about-masterpass">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>All about Masterpass</span>
                                    <span className='hidden lg:block'>Masterpass is a digital wallet service that can be used to pay for your Takealot order. Start by downloading the app on your smartphone, then simply follow the guide below.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>
                            </Link>
                            <div className='my-4 border-b'></div>


                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/payments-promos-gift-vouchers-details/a-ll-about-discovery-miles">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>All about Discovery Miles</span>
                                    <span className='hidden lg:block'>Shop and Pay using your Discovery Miles earned as a Discovery customer, read more below on how easy it is to pay.</span>
                                </div>

                                <span><IoChevronForwardOutline className='h-6 w-7 text-[#4d4d4f]' /></span>
                            </Link>
                            <div className='my-4 border-b'></div>



                            <Link className='w-full flex gap-4 items-center topic-link' to="/help-centre/payments-promos-gift-vouchers/all-about-nsfas-cellbux-vouchers">

                                <div className='w-full flex flex-col gap-2'>
                                    <span className='text-base w-fit font-semibold topic-head'>All about NSFAS | Cellbux Vouchers</span>
                                    <span className='hidden lg:block'>NSFAS Wallet is a mobile platform which offers allowances to students who qualify for NSFAS bursaries. Cellbux Vouchers is a voucher based payment solution offered to customers and businesses. Find out more below.</span>
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

export default PaymentsPromosGiftVouchersHelp;